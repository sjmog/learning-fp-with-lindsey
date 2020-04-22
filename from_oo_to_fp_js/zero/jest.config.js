module.exports = {
  verbose: true,
  projects: [
    '<rootDir>'
  ],
  testMatch: [
    "**/__tests__/**/*.js?(x)",
    "**/test/**/*.js?(x)",
    "**/?(*.)+(spec|test).js?(x)"
  ],
  testPathIgnorePatterns: [
    '/(?:production_)?node_modules/',
    '.d.ts$',
    '<rootDir>/test/fixtures',
    '<rootDir>/test/helpers',
    '__mocks__'
  ]
};
