module.exports = {
  stories: ['../src/**/*.stories.js'],
  staticDirs: ['../public'],
  framework: '@storybook/react-webpack5',
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-links',
  ],
};
