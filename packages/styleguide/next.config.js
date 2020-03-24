/* eslint-disable no-param-reassign */
const path = require('path');
const withPlugins = require('next-compose-plugins');
const withMdxEnhanced = require('next-mdx-enhanced');
const withCustomBabelConfig = require('next-plugin-custom-babel-config');
const withOptimizedImages = require('next-optimized-images');
const withTranspileModules = require('next-transpile-modules')([
  '@storeen/components',
  '@storeen/system'
]);

const plugins = [
  [
    withMdxEnhanced({
      layoutPath: 'layouts',
      defaultLayout: true,
      fileExtensions: ['mdx'],
      extendFrontMatter: {
        phase: 'prebuild|loader|both'
      }
    })({
      pageExtensions: ['js', 'jsx', 'md', 'mdx']
    })
  ],
  [
    withOptimizedImages,
    {
      handleImages: ['png'],
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

module.exports = withPlugins(plugins, {});
