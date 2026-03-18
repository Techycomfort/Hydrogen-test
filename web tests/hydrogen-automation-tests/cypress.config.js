
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://dashboard.hydrogenpay.com',
    viewportWidth: 1280,
    viewportHeight: 800,
    defaultCommandTimeout: 10000,
  },
  // cypress.env.json is automatically loaded by Cypress
  // Credentials are stored there and not committed to version control
});