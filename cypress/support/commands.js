
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
})