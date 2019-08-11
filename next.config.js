/* eslint-disable no-param-reassign, dot-notation */
const path = require('path');

module.exports = {
  target: 'serverless',
  webpack(config) {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    return config;
  }
};
