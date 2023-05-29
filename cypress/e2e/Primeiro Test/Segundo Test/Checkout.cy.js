const dados = require('../../../fixtures/dados.json')
const { checkoutCupom } = require('../../../support/pages/Dashboard')

describe('Fazendo o fluxo de chekout', () => {

    beforeEach(() => {
        cy.login(dados.email, dados.senha)
    });

    context('Fazendo checkout utilizando AppActions', () => {
        it(`Given que eu coloque o email ${dados.email} e a senha ${dados.senha}`, () => {

        });

        it('When escolha um produto e selecione as opções de cor, tamanho e quantidade e ir no carrinho', () => {
            cy.produto()
            checkoutCupom.cupom.should("be.visible")
        });

        it('Then devo ser direcionado para página de checkout e preencher os campos', () => {
            cy.checkout(dados.nome, dados.sobrenome, dados.país, dados.endereço, dados.cidade, dados.estado, dados.cep, dados.telefone)
        });
    });


});
