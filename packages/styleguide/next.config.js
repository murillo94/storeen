/* eslint-disable no-param-reassign */
const withPlugins = require('next-compose-plugins');
const withMdxEnhanced = require('next-mdx-enhanced');
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
  [withTranspileModules]
];

module.exports = withPlugins(plugins, {});
