
Cypress.Commands.add('login', (email, senha)=>{
   const fd = new FormData()
    fd.append("username,", email)
    fd.append("password", senha)
    fd.append("woocommerce-login-nonce", '616ff6b1a0')
    fd.append("_wp_http_referer", '/minha-conta/')
    fd.append('login', 'Login')

    cy.request({
        url: 'minha-conta/',
        method: 'POST',
        body: "fd"
    }).then(resp =>{
        resp.headers['Set-Cookie'].forEach(Cookie => {
            const FirstPart = Cookie.split('=')[0]
            const dividindo = FirstPart.indexOf('=')
            const key = FirstPart.substring(0, dividindo)
            const value = FirstPart.substring(dividindo+1)
            cy.setCookie(key, value)
        });
    })
    cy.visit('/minha-conta')


    Cypress.Commands.add('produto', (produto, tamanho, cor, quantidade)=>{
        cy.visit('/product-abominable-hoodie/', produto)
        cy.get('.button-variable-item-M', tamanho).click()
        cy.get('.button-variable-item-Green', cor).click()
        cy.get('.input-text', quantidade).clear().type(2)
        cy.get('.single_add_to_cart_button').click()
    })


    Cypress.Commands.add('chekout',(nome, sobrenome, país, endereço, cidade, estado, cep, telefone, email)=>{
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