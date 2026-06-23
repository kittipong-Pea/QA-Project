const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  viewportHeight : 1080 ,
  viewportWidth : 1920 ,

  e2e: {  
    // baseUrl: "http://localhost:4200/",
    baseUrl:"http://conduit.bondaracademy.com",

    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    retries :{
      runMode : 2,
      openMode : 2
    },
     projectId: "unu2wb",
  },
});
