export const productBusca = {
    get campotext() { return cy.get('#tbay-header .tbay-search') },
    get productList() { return cy.get(`.ui-menu-item:not([class^="list-header"]) > a`)},
    search(product) {
        this.campotext.type(product)
    },
    
}