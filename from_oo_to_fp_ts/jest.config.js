module.exports = {
  verbose: true,
  projects: [
    '<rootDir>'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: [
    "**/__tests__/**/*.ts?(x)",
    "**/test/**/*.ts?(x)",
    "**/?(*.)+(spec|test).ts?(x)"
  ],
  testPathIgnorePatterns: [
    '/(?:production_)?node_modules/',
    '.d.ts$',
    '<rootDir>/test/fixtures',
    '<rootDir>/test/helpers',
    '__mocks__'
  ]
};
