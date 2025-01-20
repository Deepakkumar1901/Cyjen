describe("Read data from Excel file in Cypress", () => {
    it("should use Excel data to perform login tests", () => {
      cy.readExcelFile("testData.xlsx").then((data) => {
        
        data.forEach((row) => {
          cy.visit("https://freelance-learn-automation.vercel.app/login");
          cy.get('input[name="email1"]').type("row.email");
          cy.get('input[name="password1"]').type("row.password");
          cy.get('button[type="submit"]').click();
  
          if (row.expected === "success") {
            cy.get('.container-child',{ timeout: 10000 }).should("be.visible");
          } else {
            cy.get(".errorMessage",{ timeout: 4000}).should("be.visible")
          }
        });
      });
    });
  });