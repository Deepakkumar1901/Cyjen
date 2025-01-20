class Loginpage{

    constructor(){

        this.username = "#user-name"
        this.password = "#password"
        this.submitbtn = "#login-button"

    }

        enteringusername(usern){
        cy.get(this.username).type(usern);
}
        enteringpassword(userp){
        cy.get(this.password).type(userp);
}

        enteringonsubmitbutton(){
        cy.get(this.submitbtn).click()
}
}
export default Loginpage;