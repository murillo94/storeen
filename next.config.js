/* eslint-disable no-param-reassign, dot-notation */
const path = require('path');

module.exports = {
  target: 'serverless',
  webpack(config) {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['layouts'] = path.join(__dirname, 'layouts');
    return config;
  }
};
