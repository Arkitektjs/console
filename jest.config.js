module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json',
    },
  },
  transform: { '^.+\\.ts?$': 'ts-jest' },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '/tests/.*\\.test?\\.ts$',
  moduleFileExtensions: ['ts', 'js'],
};
