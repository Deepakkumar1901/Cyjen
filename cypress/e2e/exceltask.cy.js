/// <reference types ="cypress"/>

describe('Excel Data Test', () => {
    it('should read data from Excel file', () => {
      const filePath = 'cypress/fixtures/testData.xlsx'; // Use a relative path
  
      cy.task('readExcel', filePath).then((data) => {
        // Access the first row and second column
        const firstRowSecondColumn = data[0][1]; 
  
        cy.log(`Value from first row, second column: ${firstRowSecondColumn}`); 

        cy.visit("https://www.saucedemo.com/");
          cy.get('#user-name').type(data[0][0]);
          cy.get('#password').type(data[0][1]);
          cy.get('#login-button').click();

          cy.url().should('eq','https://www.saucedemo.com/inventory.html');
  
        
      });
    });

    it.only('Invalid Credential', () => {
        const filePath = 'cypress/fixtures/testData.xlsx'; // Use a relative path
    
        cy.task('readExcel', filePath).then((data) => {
          
            
            cy.visit("https://www.saucedemo.com/");
            cy.get('#user-name').type(data[1][0]);
            cy.get('#password').type(data[1][1]);
            cy.get('#login-button').click();
        //     cy.get('[data-test="error"]').invoke('text').then((dr)=>{
        //     expect(dr).to.eq('Epic sadface: Username and password do not match any user in this service');
        //      expect(text).to.include('Username and password do not match any user in this service');

        // })

        cy.get('[data-test="error"]').invoke('text').as('error')
        cy.get('@error').should('eq', 'Epic sadface: Username and password do not match any user in this service');
    
          
        });
      });
  });
  