module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json',
    },
  },
  transform: { '^.+\\.ts?$': 'ts-jest' },
  testEnvironment: 'node',
  testRegex: '/tests/.*\\.test?\\.ts$',
  moduleFileExtensions: ['ts', 'js'],
};
