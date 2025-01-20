import Loginpage from "../POM/saucelogin"
//import HomePage from "../POM/homeinv";

describe('practicing automation on saucelab demo', ()=>{

    // it('validate login functionality in sauce demo', ()=>{
    // cy.visit('/')
    // cy.get('#user-name').type('standard_user')
    // cy.get('#password').type('secret_sauce')
    // cy.get('#login-button').click()

    let loginpage = new Loginpage();
    let cred;
    before(()=>{
        cy.fixture('login').then((tdata)=>{
            cred=tdata;
        })
    })

    beforeEach(()=>{
        cy.visit('/')
    })

    

    it('validate login',()=>{
        loginpage.enteringusername(cred.username);
        loginpage.enteringpassword(cred.password);
        loginpage.enteringonsubmitbutton();

    })
})

    // it('validate inventory page',()=>{
    // cy.visit("https://www.saucedemo.com/v1/inventory.html")
    // cy.get('[href="./inventory-item.html?id=4"] div.inventory_item_name').click()
    // cy.get('.btn_primary.btn_inventory').click()
    // cy.get('.inventory_details_back_button').click({force: true})
    // cy.get('[href*="./inventory-item.html?id=1"] div.inventory_item_name').click()
    // cy.get('.btn_primary.btn_inventory').click()
    // cy.get('path[fill]').click()

    // })

//     it('validate cart page',()=>{

//         cy.visit('https://www.saucedemo.com/v1/cart.html')
//         cy.get('.btn_action.checkout_button').click()
//     })

//     it('validate checkout page',()=>{

//         cy.visit('https://www.saucedemo.com/v1/checkout-step-one.html')
//         cy.get('#first-name').type('rafi')
//         cy.get('#last-name').type('sk')
//         cy.get('#postal-code').type('600028')
//         cy.get('input.btn_primary.cart_button').click()
//         cy.get('.btn_action.cart_button').click()

//     })

