//beforeEACH

///<reference types="Cypress"/>

describe('text login page',()=>{
    let testcred;
    before(()=>{
    cy.fixture('login').then((testdata)=>{
        testcred= testdata
    })

})

beforeEach(()=>{
cy.visit('https://practicetestautomation.com/practice-test-login/')
})


it('positive test',()=>{
    cy.url().should('include',testcred.urllinktext)
    cy.title().should('include',testcred.titlecontent)
    cy.get('username').eq(0).type(testcred.name)
    cy.get('#password').eq(0).type(testcred.userpass)
    cy.get('#submit').eq(0).click()
})
})