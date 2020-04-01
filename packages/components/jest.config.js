module.exports = {
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverageFrom: ['**/*.{js,jsx}'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
};
