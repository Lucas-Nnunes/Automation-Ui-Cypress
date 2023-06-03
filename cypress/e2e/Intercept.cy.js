import { productBusca } from '../support/pages/Busca';
import { homePage } from '../support/pages/HomePage';

const html = require('../fixtures/html.json')


describe('Intercept product test', () => {

    before(() => {
        cy.intercept({
            method: 'GET',
            url: '/wp-admin/admin-ajax*',
            query: {

            }
        }, req => {
            req.reply(
                {
                    statusCode: 200,
                    body: `${req.query.callback}(
                ${JSON.stringify(
                        html.AbominableHoodie
                    )} 
              )`
                }
            )
        })
    })

    beforeEach(() => {
        cy.visit("/")
    });

    it('Selecionando as opções do produto', () => {
        homePage.lupaBusca()
        productBusca.search('Abominable Hoodie')
        productBusca.productList.first().should('have.attr', 'title', 'Abominable Hoodie')
    });

});