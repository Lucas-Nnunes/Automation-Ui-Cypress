const CadastroPag = require('../../support/pages/cadastro')
const dados = require('../../fixtures/dados.json')
const { dashboardPage, dashBoardErro } = require('../../support/pages/Dashboard')


describe('Cadastrando um novo usuário e fazendo login', () => {
    beforeEach(() => {
        cy.visit('/minha-conta')
    });

    context('Cadastrar um novo usuário', () => {
       it ('Given que eu visite a EBAC Store', () => {

        });

        it(`When eu colocar as credenciais já cadastradas na atividade ${dados.email} e ${dados.senha}`, () => {
            CadastroPag.Cadastro(dados.email, dados.senha);
            dashBoardErro.ErrorConfirm.should("be.visible")
        });
        
       
        
    });

    context('Fazer login com usuário existente', () => {
        it('Given que eu visite a EBAC Store', () => {
        });

        it(`When eu colocar as credenciais já existentes de ${dados.email} e ${dados.senha}`, () => {
            CadastroPag.Login(dados.email, dados.senha);
        });

        it('Then deve se tornar visível o dashboard de minha conta', () => {
            dashboardPage.ConfirmName.should("be.visible");
        });
    });
});
