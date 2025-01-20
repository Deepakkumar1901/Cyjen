class HomePage{
    visitingHomePage(){
        cy.visit('/inventory.html')

    }

    addingProductToCart(Prodadd){
        Prodadd.forEach((inv)=>{
            cy.addingProductToCart(inv)

        })
    }

    verifyingCartIconVisibiltyAndClickingIt(){
        cy.get('[href=".cart.html"]').should('be.visible').click()
    }
}
export default HomePage;