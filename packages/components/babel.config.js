module.exports = api => {
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
