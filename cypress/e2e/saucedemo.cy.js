describe('practicing automation on saucelab demo', ()=>{

    it('validate login functionality with invalid password', ()=>{
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('input[type="text"]').type("standard_user");
    cy.get('input[type="password"]').type("incorrect password");
    cy.get('input[type="submit"]').click()
    cy.get('[data-test="error"]').should('be.visible').and('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })


    it('validate login functionality with valid password', ()=>{
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('input[type="text"]').type("standard_user"); 
    cy.get('input[type="password"]').type("secret_sauce");
    cy.get('input[type="submit"]').click()
    //cy.url().should('include', 'https://www.saucedemo.com/v1/inventory.html')
    cy.get('[href="./inventory-item.html?id=4"] div.inventory_item_name').click()
    cy.get('.btn_primary.btn_inventory').click()
    cy.get('.inventory_details_back_button').click({force: true})
    cy.get('[href*="./inventory-item.html?id=1"] div.inventory_item_name').click()
    cy.get('.btn_primary.btn_inventory').click()
    cy.get('.inventory_details_back_button').click({force: true})
    cy.get('path[fill]').click()
    cy.get('.btn_action').click()
    cy.get('input#first-name').type("rafi");
    cy.get('input#last-name').type("khan");
    cy.get('input#postal-code').type("600020");
    cy.get('input.btn_primary.cart_button').click()
    cy.get('.btn_action.cart_button').click()
    cy.visit('https://www.saucedemo.com/v1/checkout-complete.html')
    cy.get('.complete-header').should('be.visible').and('have.text', 'THANK YOU FOR YOUR ORDER')
    
})

})