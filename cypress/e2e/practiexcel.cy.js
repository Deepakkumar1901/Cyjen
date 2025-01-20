/// <reference types ="cypress"/>



describe('Excel Test', () => {
    it('reads data from Excel', () => {
      cy.readExcel('cypress\fixtures\excelpract.xlsx').then((data) => {
        cy.log(JSON.stringify(data)); // Log the data for verification

        cy.task('readExcel', filePath).then((data) => {
            // Access the first row and second column
            const firstRowSecondColumn = data[0][1]; 
      
            cy.log(`Value from first row, second column: ${firstRowSecondColumn}`); 
    
            cy.visit("https://practicetestautomation.com/practice-test-login/");
              cy.get('##username').type(data[0][0]);
              cy.get('#password').type(data[0][1]);
              cy.get('#submit').click();
        // You can now use 'data' in your tests
      });
    });
  });
});