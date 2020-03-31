/* eslint-disable no-param-reassign, no-underscore-dangle */
const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withTranspileModules = require('next-transpile-modules')([
  '@storeen/components',
  '@storeen/system'
]);
const withMdxEnhanced = require('next-mdx-enhanced');

const getHref = resourcePath => {
  const parts = resourcePath.split('/');
  const partsLength = parts.length;
  const fileName = parts[partsLength - 1];
  const pathName = parts[partsLength - 2];

  return `/${pathName}/${fileName.replace(/\.mdx$/, '')}`;
};

const plugins = [
  [
    withMdxEnhanced({
      layoutPath: 'src/layouts',
      defaultLayout: true,
      extendFrontMatter: {
        process: (_, frontMatter) => ({
          href: getHref(frontMatter.__resourcePath)
        })
      }
    })({
      pageExtensions: ['js', 'jsx', 'md', 'mdx']
    })
  ],
  [
    withOptimizedImages,
    {
      handleImages: ['png', 'svg'],
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
