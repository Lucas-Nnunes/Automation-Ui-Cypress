class CadastroPag {
    get user(){return cy.get('#reg_email')}
    get pass(){return cy.get('#reg_password')}
    get bottom(){return cy.get('#customer_login > div:nth-child(2) > form > p:nth-child(4) > input.button')}
    get campoEmail(){return cy.get ('#username')}
    get campoSenha(){return cy.get ('#password')}
    get bottomLogin() {return cy.get('#customer_login > div:nth-child(1) > form > input.button')}
    get bottomComprar() {return cy.get('#primary-menu > li.menu-item-629.aligned-fullwidth > a')}

    Cadastro(user, pass){
        this.user.type(user)
        this.pass.type(pass)
        this.bottom.click()
    }

Login(email,senha){
    this.campoEmail.type(email)
    this.campoSenha.type(senha)
    this.bottomLogin.click()
    this.bottomComprar.click()
}
}


module.exports = new CadastroPag()