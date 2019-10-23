const fs = require('fs')
const path = require('path')

const chalk = require('chalk')
const rc = require('rc')
const AG = require('artifact/lib/artifact')
const semver = require('semver')

const logger = require('./helpers/logger')
const artifactConfig = require('./artifact-config.json')

//const dir = `${__dirname}/..`
const pkg = require('../package.json')//`${dir}/package.json`)

const pattern = /build\.([0-9]*)/

function latestVersionWithSamePatch() {
  const lowerBound = `>=${pkg.version}-build.1`
  const upperBound = `<${semver.inc(pkg.version, 'patch')}-build.1`
  return `${lowerBound} ${upperBound}`
}

const args = process.argv.slice(2)

process.on('unhandledRejection', unhandledError => {
  throw unhandledError
})

;(async () => {
  await AG.cmds
    .resolve({ name: pkg.name, version: latestVersionWithSamePatch() })
    .then(latest => {
      logger.success(`AG Resolved with latest version: ${latest.version}`)
      const matches = pattern.exec(latest.version)

      if (matches && matches.length) {
        pkg.version += `-build.${1 + parseInt(matches[1])}`
      } else {
        pkg.version += '-build.1'
      }
    })
    .catch(() => {
      logger.warn(`No existing AG build with matching version`)
      pkg.version += '-build.1'
    })
    .finally(() => {
      writeArtifact(pkg)
    })
})()

const writeArtifact = pkg => {
  const artifact = {
    name: pkg.name,
    version: pkg.version,
    description: pkg.description,
    repository: pkg.repository,
    build: { url: process.env.BUILD_URL || 'MyELT' },
    config: { contexts: [artifactConfig] },
  }

  const buildOutput = {
    version: pkg.version,
    buildDate: new Date().toISOString(),
  }

  logger.log(`AG's next version: ${buildOutput.version}`)

  try {
    const buildDir = `${__dirname}/../build`
    const buildOutputPath = path.resolve(`${buildDir}/buildOutput.json`)

    if (!fs.existsSync(buildDir)) {
      logger.log('\nCreating /build dir...')
      fs.mkdirSync(buildDir)
      logger.success(`Success Creating /build dir`)
    }

    logger.log('\nWriting buildOutput JSON...')
    fs.writeFileSync(buildOutputPath, JSON.stringify(buildOutput, null, 2))

    logger.success(`Build Output saved to ${buildOutputPath}`)
  } catch (err) {
    throw new Error(logger.error(`Error Writing buildOutput JSON: ${err}`))
  }

  if (args.includes('no-publish')) {
    logger.warn(
      "\n ** Publishing this artifact has been disabled by the npm script's arguments **\n\n",
    );

    writeConfigFile()
  } else {
    logger.log('Publishing Artifact...')
    AG.cmds
      .publish(artifact, null, `${__dirname}/..`)//dir)
      .then(() => logger.success(`Success Publishing: ${pkg.version}`))
      .catch(e => {
        throw new Error(logger.error(`Error Publishing AG: ${e}`))
      })
  }
}

const writeConfigFile = () => {
  const {
    name
  } = require('./artifact-config.json')//schema: { properties },

  const rcName = name.replace(/^./, '').replace(/rc$/, '')
  const { config } = rc(rcName, {})

  if (!config) {
    throw new Error(
      logger.error(
        `\nConfiguration file is missing.  Run \`${chalk.inverse(
          'npm run proxy:__env__',
        )}\` to create ${name} \n`,
      ),
    )
  }

  /*if (!publicKey || !privateKey) {
    throw new Error(
      logger.error(
        `\nRequired Keys are missing.  Run \`${chalk.inverse(
          'npm run proxy:__env__',
        )}\` to update ${name} \n`,
      ),
    )
  }*/

  logger.success(
    `Found existing env configs, ${name} (${rcName}), at ${config}`,
  )

  //const newConfigs = { publicKey, privateKey }

  /*Object.entries(properties).forEach(([key, value]) => {
    if (value && value.default) {
      newConfigs[key] = value.default
    }
  })*/

  const configPath = path.resolve(__dirname, '../../', name)
  /*try {
    logger.log(`\nUpdating environment configs, ${name}...`)
    fs.writeFileSync(configPath, JSON.stringify(newConfigs, null, 2))
  } catch (err) {
    throw new Error(logger.error(err))
  }*/

  logger.success(`Successfully saved to ${configPath}`)
}