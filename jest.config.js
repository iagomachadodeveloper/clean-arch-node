module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*ts'],
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
