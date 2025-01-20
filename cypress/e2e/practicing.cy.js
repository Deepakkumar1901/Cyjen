describe('practicing automation login on demo site',()=>{

    it('validate login functionality with positive credentials',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('input#username').type("student");
        cy.get("input[name='password']").type("Password123");
        cy.get('.btn').click()
        cy.wait(2000);
        cy.url().should('include','https://practicetestautomation.com/logged-in-successfully/')
        cy.get('p strong').should('have.text','Congratulations student. You successfully logged in!')
        cy.get('[href*="/practice-test-login/"]').should('be.visible')
    })
//     it('Validate negative login with invalid password',()=>{
//         cy.visit('https://practicetestautomation.com/practice-test-login/')
//         cy.get('input#username').type("student");
//         cy.get("input[name='password']").type("incorrectpassword");
//         cy.get('.btn').click()
//         cy.get('div#error').should('be.visible').and('have.text','Your password is invalid!')
//     })
 })