export const dashboardPage = {
    get ConfirmName() {return cy.get('#tbay-breadscrumb')},
    
}


export const dashBoardErro = {
    get ErrorConfirm() {return cy.get('#main > div > div.woocommerce-notices-wrapper > ul > li')},
}

export const checkoutCupom = {
    get cupom() {return cy.get('#main > div > div.woocommerce-form-coupon-toggle > div')}
}