module.exports = {
    preset: '@playwright/test',
    testMatch: [
      '**/__tests__/**/*.test.[jt]s?(x)',
      '**/?(*.)+(spec|test).test.[jt]s?(x)',
    ],
   
// Add any other Jest configuration options you need.
};