class ChekoutPag {
    get user(){return cy.get('#user_login')}
    get pass(){return cy.get('#user_pass')}
    get bottom(){return cy.get('#wp-submit')}

    ChekoutApp(user, pass){
        this.user.type(user)
        this.pass.type(pass)
        this.bottom.click()
    }
}
module.exports = new ChekoutPag()




