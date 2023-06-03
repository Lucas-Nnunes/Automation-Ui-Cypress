export const homePage = {
    get busca() { return cy.get('.site-header .search-form > button') },
    lupaBusca() { this.busca.click() }
}