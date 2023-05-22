class CadastroPag {
    get user(){return cy.get('#reg_email')}
    get pass(){return cy.get('#reg_password')}
    get bottom(){return cy.get('#customer_login > div:nth-child(2) > form > p:nth-child(4) > input.button')}

    Cadastro(user, pass){
        this.user.type(user)
        this.pass.type(pass)
        this.bottom.click()
    }
}
module.exports = new CadastroPag()