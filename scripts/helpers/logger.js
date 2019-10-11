/* eslint-disable no-console */

const chalk = require('chalk')

const logger = {
    error: err => {
        console.log(chalk.red(err))
    }, 
    warn: err => {
        console.warn(chalk.yellow(err))
    }, 
    log: function(msg) {
        console.log(msg)
    }, 
    success: function(msg) {
        this.log(`${chalk.green(`${msg} ✓`)}`)
    }
}

module.exports = logger