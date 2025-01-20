describe('automate train sauce',()=>{

    it('validate the invalid functionality',()=>{

        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('input[type="text"]').type('standard_user')
        cy.get('input[id="password"]').type('efdfds')
        cy.get('input[type="submit"]').click()
        cy.get('[data-test="error"]').should('be.visible').and('have.text','Epic sadface: Username and password do not match any user in this service')

     

    })

    it('validate the valid functionality',()=>{
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('input[type="text"]').type('standard_user')
        cy.get('input[id="password"]').type('secret_sauce')
        cy.get('input[type="submit"]').click()
        cy.get("a[id='item_4_title_link'] div[class='inventory_item_name']").click()
        cy.get('.btn_primary.btn_inventory').click({force : true})
        cy.get('.fa-layers-counter').click()
        cy.get('.btn_action').click()
        cy.get('[data-test="firstName"]').type('rafi')
        cy.get('[data-test="lastName"]').type('khan')
        cy.get('[data-test="postalCode"]').type('600020')
        cy.get('.btn_primary').click()
        cy.get('.btn_action').click()
        cy.get('.complete-header').should('be.visible').and('have.text','THANK YOU FOR YOUR ORDER')

        


    
    })
})