describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://rahulshettyacademy.com/angularpractice/')
      cy.get("input[name='name']").eq(1).type('Raju').should('be.visible')
      //cy.get(':nth-child(1) > .form-control').type('Raju').should('be.visible')
      cy.get(':nth-child(2) > .form-control').type('abcde@gmail.com').should('be.visible')
      cy.get('#exampleInputPassword1').type('password123').should('be.visible')
      cy.get('#exampleCheck1').check().should('be.checked')
      cy.get('#exampleFormControlSelect1').select('Male').should('be.visible')
      cy.get('#inlineRadio2').click()
      cy.get(':nth-child(8) > .form-control').type('1992-05-11').should('be.visible')
      cy.get('.btn').click()
      cy.visit('https://rahulshettyacademy.com/angularpractice/shop') 
      cy.get(':nth-child(1) > .card > .card-footer > .btn > .zmdi').click() 
      cy.get(':nth-child(2) > .card > .card-footer > .btn').click()
      cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
      cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
      cy.get('#country').type('In').should('be.visible')
      cy.wait(5000)
      cy.get(':nth-child(3) > li > a').click()
      cy.get('.checkbox').click()
      cy.get('.ng-untouched > .btn').click()
  
    

      
     })

})