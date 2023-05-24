const CadastroPag = require ('../../support/pages/cadastro')
const dados = require ('../../fixtures/dados.json')
const {dashboardPage} = require ('../../support/pages/Dashboard')


describe('Cadastrando um novo usuário e fazendo login', () => {
    
    beforeEach(() => {
        cy.visit('/minha-conta')
    });

    it('Preenchendo campos de email e senha', () => {
        CadastroPag.Cadastro(dados.email, dados.senha)
        dashboardPage.ErrorConfirm.should("be.visible")
       
    });



    it('Fazendo login na conta nova', () =>{
        CadastroPag.Login(dados.email, dados.senha)
        dashboardPage.ConfirmName.should("be.visible")
    })
});