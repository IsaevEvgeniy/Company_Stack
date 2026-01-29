const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.LOGIN = process.env.LOGIN;
      config.env.PASSWORD = process.env.PASSWORD;
      return config;
    },
  },
});
