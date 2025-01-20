describe('Saucedemo Login with cy.session()', () => {

    beforeEach(() => {
      cy.session('loginSession', () => {
        cy.visit('https://www.saucedemo.com/v1/');

        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();

        cy.url().should('include', '/inventory.html');
      });
    });
  
    it('should preserve session and skip login', () => {
      cy.visit('https://www.saucedemo.com/v1/inventory.html');
      cy.url().should('include', '/inventory.html');
    });
  });