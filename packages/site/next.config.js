/* eslint-disable no-param-reassign */
const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withTranspileModules = require('next-transpile-modules')([
  '@storeen/components',
  '@storeen/system'
]);

const plugins = [
  [
    withOptimizedImages,
    {
      handleImages: ['png', 'svg', 'ico'],
      pngquant: {
        speed: 10
      },
      svgo: {
        plugins: [{ removeComments: true, cleanupAttrs: true }]
      }
    }
  ],
  [withTranspileModules]
];

module.exports = withPlugins(plugins, {});
