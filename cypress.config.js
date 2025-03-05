const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/my-test-output-[hash].xml', // Définir l'emplacement du fichier de sortie JUnit
    toConsole: true, // Afficher les résultats dans la console également
  },

  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },

    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Localisation des fichiers de test
  },
});
