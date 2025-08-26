const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight:1080,
  viewportWidth:1920,
  video:false,
  e2e: {
    baseUrl: 'http://localhost:4200',
    //excludeSpecPattern:['**/1-getting-started','**/2-advanced-examples'],
    //specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',	
    defaultCommandTimeout: 85000

    
  },
  component: {
    async devServer({ specs, cypressConfig, devServerEvents }) {
      const { port, close } = await startDevServer(
        specs,
        cypressConfig,
        devServerEvents
      )

      return {
        port,
        close,
      }
    },
  },
})