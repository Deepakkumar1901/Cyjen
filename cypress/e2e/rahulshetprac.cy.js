describe('basic elements validation and testing',()=>{

    it("validate all the elements",()=>{
        //homepage

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //radio button
    cy.get('input[value="radio2"]').check().should('be.checked')

    //check box
    cy.get('label input[type="checkbox"]').check(['option1','option2'])

    //static dropdown
    cy.get('select').select('option2').should('have.value','option2')

    //dynamic dropdown

    cy.get('input#autocomplete').type('ca')
    })
})