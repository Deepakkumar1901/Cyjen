//const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
      
//     },
//    baseUrl: "https://www.saucedemo.com/v1"
//   },
// });

const { defineConfig } = require("cypress");
const path = require('path');
const XLSX = require('xlsx');

module.exports = defineConfig({
  pageLoadTimeout: 60000,



  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        readExcel(filePath) {
          if (!filePath) {
            throw new Error('File path must be provided');
          }
    
          const workbook = XLSX.readFile(filePath);
          const sheetName = workbook.SheetNames[0]; // Get the first sheet
          const worksheet = workbook.Sheets[sheetName];
          const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          return data.slice(1); // Skip header row
        },
      });
    }
  }

  
});








  