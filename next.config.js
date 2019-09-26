/* eslint-disable no-param-reassign, dot-notation */
const path = require('path');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        handleImages: ['png', 'svg', 'ico'],
        pngquant: {
          speed: 10
        },
        svgo: {
          plugins: [{ removeComments: true, cleanupAttrs: true }]
        }
      }
    ]
  ],
  {
    webpack(config) {
      config.resolve.alias['components'] = path.join(__dirname, 'components');
      config.resolve.alias['layouts'] = path.join(__dirname, 'layouts');
      config.resolve.alias['themes'] = path.join(__dirname, 'themes');
      config.resolve.alias['images'] = path.join(__dirname, 'static/images');
      return config;
    }
  }
);
