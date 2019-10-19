/* eslint-disable no-param-reassign, dot-notation */
const path = require('path');
const optimizedImages = require('next-optimized-images');

module.exports = optimizedImages({
  handleImages: ['png', 'svg', 'ico'],
  pngquant: {
    speed: 10
  },
  svgo: {
    plugins: [{ removeComments: true, cleanupAttrs: true }]
  },
  target: 'serverless',
  webpack(config) {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['containers'] = path.join(__dirname, 'containers');
    config.resolve.alias['layouts'] = path.join(__dirname, 'layouts');
    config.resolve.alias['utils'] = path.join(__dirname, 'utils');
    config.resolve.alias['images'] = path.join(
      __dirname,
      'public/static/images'
    );
    return config;
  }
});
