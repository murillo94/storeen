/* eslint-disable no-param-reassign */
const path = require('path');
const withPlugins = require('next-compose-plugins');
const withCustomBabelConfig = require('next-plugin-custom-babel-config');
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
  [
    withCustomBabelConfig,
    { babelConfigFile: path.resolve('../../babel.config.js') }
  ],
  [withTranspileModules]
];

const nextConfig = {
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      containers: path.join(__dirname, 'src/containers'),
      layouts: path.join(__dirname, 'src/layouts'),
      images: path.join(__dirname, 'src/public/static/images')
    };

    return config;
  }
};

module.exports = withPlugins(plugins, nextConfig);
