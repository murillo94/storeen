module.exports = api => {
  api.cache(true);

  return {
    presets: ['next/babel', '@babel/preset-react'],
    plugins: [['styled-components', { ssr: true }]]
  };
};
