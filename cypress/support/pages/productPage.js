export const productPage = {
    get breadcrumbProduct() { return cy.get('.breadcrumb > li:last-child') },
    get productTitle() { return cy.get('h1.product_title') },
    get variations() { return cy.get('.variations') }
}