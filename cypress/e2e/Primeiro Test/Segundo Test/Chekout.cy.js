const dados = require ('../../../fixtures/dados.json')
describe('Fazendo o fluxo de chekout', () => {
     
    beforeEach(() => {
        cy.login(dados.email, dados.senha)
    });

    it('Adicionando produto e fazendo ckekout', () => {
       cy.produto(protudo, tamanho, cor, quantidade)
       cy.ckekout(dados.nome, dados.sobrenome, dados.país, dados.endereço, dados.cidade, dados.estado, dados.cep, dados.telefone)
    });

});
