//USING ARRAY AND FOREACH

describe('test login page',()=>{
    it('positive test',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.fixture('login').then((usercred)=>{
            cy.url().should('include',usercred.urllinktext)
            cy.url().should('include',usercred.titlecontent)
            cy.get('#username').eq(0).type(usercred.username)
            cy.get('#password').eq(0).type(usercred.userpass)
            cy.get('#submit').eq(0).click()

        })
    })
})

describe('test login page',()=>{
    it('Negative test',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.fixture('login').then((usercred)=>{
            cy.url().should('include',usercred.urllinktext)
            cy.url().should('include',usercred.titlecontent)
            cy.get('#username').eq(0).type(usercred.username)
            cy.get('#password').eq(0).type(usercred.userpass)
            cy.get('#submit').eq(0).click()

        })
    })
})