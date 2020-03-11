/* eslint-disable func-names */
module.exports = function(api) {
  api.cache(true);

  return {
    presets: ['next/babel', '@babel/preset-react'],
    env: {
      test: {
        plugins: ['transform-dynamic-import']
      }
    }
  };
};
