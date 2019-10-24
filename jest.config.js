module.exports = {
  roots: [
    '<rootDir>/src',
    '<rootDir>/.storybook',
  ],
  // setupFiles: ['<rootDir>/src/tests/setupTests.ts'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$',
  // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(j|t)sx?$',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest',
    // '^.+\\.tsx?$': 'ts-jest'
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>assetsTransformer.js',
    '\\.(css|less)$': '<rootDir>assetsTransformer.js',
    '\\.(md|mdx|html)$': '<rootDir>assetsTransformer.js',
  },
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  collectCoverage: false
};
