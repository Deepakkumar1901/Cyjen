describe('to amazon website and check the mobile then cart list and print',()=>{

    it('Add products to cart, then checkout',()=>{

            cy.visit('https://www.amazon.com/')
            cy.wait(5000)
            cy.get('#twotabsearchtextbox', { timeout: 12000 }).type('samsung s23 ultra')
            cy.get('#nav-search-submit-button').click()
            cy.get('#a-autoid-1-announce').click()
            cy.wait(4000)
            cy.get('#nav-cart-count').click()
            cy.contains('Samsung Galaxy S23 Ultra 5G SM-S918B/DS Dual SIM 256GB ROM 8GB RAM GSM Factory Unlocked Global Model (Mobile Cell Phone) (Phantom Green)')
        .should('be.visible')

    })
})



