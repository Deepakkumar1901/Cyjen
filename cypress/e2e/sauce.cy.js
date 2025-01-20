/// <reference types ="cypress"/>


describe('text login page',()=>{
    let testcredential;
    before(()=>{
    cy.fixture('practi').then((testdatad)=>{
        testcredential= testdatad
    })

})


    it('positive test',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.get('input#username').type(testcredential.username);
    cy.get("input[name='password']").type(testcredential.password);
    cy.get('.btn').click()
})
})

