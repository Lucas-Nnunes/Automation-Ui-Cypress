
Cypress.Commands.add('login', (usuario, senha) => {
    const fd = new FormData()
    fd.append('log', usuario)
    fd.append('pwd', senha)
    fd.append('wp-submit', 'Acessar')
    fd.append('redirect_to', `/wp-admin`)
    fd.append('testcookie', 1)

    cy.request({
        url: `/wp-login.php`,
        method: "POST",
        body: fd
    }).then((resp) => {
        resp.headers['set-cookie'].forEach(cookie => {
            const firstPart = cookie.split(';')[0]
            const separator = firstPart.indexOf('=')
            const name = firstPart.substring(0, separator)
            const value = firstPart.substring(separator + 1)
            cy.setCookie(name, value)
        })
    })
    



    Cypress.Commands.add('produto', (produto, tamanho, cor, quantidade)=>{
        cy.visit(`/product/-abominable-hoodie`, produto)
        cy.get('.button-variable-item-M', tamanho).click()
        cy.get('.button-variable-item-Green', cor).click()
        cy.get('.input-text', quantidade).clear().type(2)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
    })


    Cypress.Commands.add('checkout',(nome, sobrenome, país, endereço, cidade, estado, cep, telefone, email)=>{
        const fd = new FormData()
        fd.append('billing_first_name', nome)
        fd.append('billing_last_name', sobrenome)
        fd.append('billing_country', país)
        fd.append('billing_address_1', endereço)
        fd.append('billing_city', cidade)
        fd.append('billing_state', estado)
        fd.append('billing_postcode', cep)
        fd.append('billing_phone', telefone)
        fd.append('billing_email', email)
        fd.append('payment_method', 'bacs')
        fd.append('#terms', 'on')
        fd.append('terms-field', 1)
        fd.append('woocommerce-process-checkout-nonce', 'e2b1cf589a')
        fd.append('_wp_http_referer', `/?wc-ajax=update_order_review`)
        cy.request({
            url: `/?wc-ajax=checkout`,
            method: 'POST',
            body: fd
        }).then((resp)=>{
            expect(resp.status).to.equal(200)
        })

    })

})