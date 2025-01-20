///<reference types="Cypress"/>
describe('test login page',() =>  {
    it('positive test',()  => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.fixture('userData').then(user=>{
        user.forEach((usercred) =>{
            const uname=usercred.username;
            const mail=usercred.usermail;
            const pass=usercred.userpass;

            cy.get('input.form.control').eq(0).type(uname)
            cy.get('input.form.control').eq(1).type(mail)
            cy.get('input.form.control').eq(2).type(mail)
            cy.get('#exampleCheck1').check().should('be.checked')
            cy.get('#exampleFormControlSelect1').select('Male').should('have.value','Male')
            cy.get('#inlineRadio1').check().should('be.checked')
            cy.get('#inlineRadio3').check({force: true}).should('be.disabled')
            cy.get("[name='bday]").type("2002-02-02")
            cy.get("[value='submit").click()
            cy.get('strong').should('have.text','sucess!')

 })  
        })
    })