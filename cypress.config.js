const { defineConfig } = require("cypress");
const Mochawesome = require("mochawesome");

module.exports = defineConfig({
  e2e: {
    reporter: 'mochawesome',
    baseUrl: 'http://lojaebac.ebaconline.art.br/',

    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: false,
      json: true,
    },
  },
  
 

});
