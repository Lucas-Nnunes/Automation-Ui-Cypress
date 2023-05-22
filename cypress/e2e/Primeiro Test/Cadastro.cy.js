const CadastroPag = require ('../../support/pages/cadastro')
const dados = require ('../../fixtures/dados.json')
const {dashboardPage} = require ('../../support/pages/Dashboard')

describe('Cadastrando um novo usuário', () => {
    
    beforeEach(() => {
        cy.visit('/minha-conta')
    });

    it('Preenchendo campos de email e senha', () => {
        CadastroPag.Cadastro(dados.email, dados.senha)
        dashboardPage.ConfirmName.should("be.visible")
    });
});