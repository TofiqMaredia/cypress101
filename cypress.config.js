const { defineConfig } = require('cypress')
const { lighthouse, pa11y, prepareAudit } = require("cypress-audit");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.lambdatest.com',
    supportFile: false,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {

      on('before:browser:launch', (browser = {}, launchOptions) => {
        prepareAudit(launchOptions)
      })
    
      on('task', {
        lighthouse: lighthouse(), // calling the function is important
      })

    }
  }
})