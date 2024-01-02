
import { HomePage } from '../support/pages';
import { ProductTitle } from '../fixtures/html.json';

describe('Interceptando api ao adicionar, e remover produto do carrinho', () => {

before(() => {
  cy.intercept({
    url: '/wp-admin/admin-ajax*',
    query: { term: "Zappelin Yoga Pant" }
  }, req => {
    req.reply(
      {
        statusCode: 200,
        body: `${req.query.callback}(
          ${JSON.stringify(
            ProductTitle
          )}
        )`
      })
  })


});
  
beforeEach(() => {
  cy.visit("/")
})



  ProductTitle.forEach(item=>{
  it(`Product ${item.label} should be return correctly`, () => {
    HomePage.lupaBusca()
    productSearch.search(item.label)
    productSearch.productList.first().should('have.attr', 'title', item.label).click()
    productSearch.productList.each(el=>{
      expect(el.attr('title')).eq(item.label)
    })
  });
})

});
