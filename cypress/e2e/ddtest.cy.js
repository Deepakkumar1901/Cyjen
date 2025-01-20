//data driven test
//<reference types="Cypress"/>
const testdata = require('../fixtures/login.json')
describe('test login page', ()=> {
    testdata.forEach((testcred)=>{
        

    it('positive test',()=>{
        
        cy.visit('https://practicetestautomation.com/practice-test-login/')

        
        cy.url().should('include',testcred.urllinktext)
        cy.title().should('include',testcred.titlecontent)
        cy.get('#username').eq(0).type(testcred.username)
        cy.get('#password').eq(0).type(testcred.userpass)
        cy.get('#submit').eq(0).click()

    })
})
})
    