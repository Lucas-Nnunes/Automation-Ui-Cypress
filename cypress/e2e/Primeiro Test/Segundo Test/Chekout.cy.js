const dados = require ('../../../fixtures/dados.json')
const {dashboardPage} = require ('../../../support/pages/Dashboard')
const {ChekoutApp} = require ('../../../support/AppActtions/chekout');
const chekout = require('../../../support/AppActtions/chekout');
describe('Fazendo o fluxo de chekout', () => {
     
    beforeEach(() => {
        cy.login(dados.email, dados.senha)
    });

    it('Fazendo o fluxo com AppNactions', () => {
       //dashboardPage.ConfirmName.should("be.visible")
    });

});
