export const dashboardPage = {
    get ConfirmName() {return cy.get('#tbay-breadscrumb')},
    get ErrorConfirm() {return cy.get('#main > div > div.woocommerce-notices-wrapper > ul > li')}
}
