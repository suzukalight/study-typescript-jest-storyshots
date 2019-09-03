module.exports = {
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  transform: {
    '^.+\\.(js|ts)(x?)$': 'babel-jest',
  },
  testMatch: [
    '!**/flycheck_*',
    '<rootDir>/src/**/__tests__/**/*.(ts|js)?(x)',
    '<rootDir>/src/**/?(*.)(spec|test).(ts|js)?(x)',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/.storybook/__mocks__/file.js',
    '\\.(styl|css|less|scss)$': '<rootDir>/.storybook/__mocks__/style.js',
  },
  setupFiles: ['./.jest/setup.js'],
};
