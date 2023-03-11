
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('home page',()=>{
    it('Página deve estar online',()=>{
        cy.viewport(1440, 900)
        cy.visit('https://www.voegol.com.br/')
        cy.get('[id=basic_content_12686] h1').should('have.text','Seja bem-vindo a GOL. Sua viagem começa aqui!')
        cy.get('[id="onetrust-accept-btn-handler"]').click() //Aceita cookies do site


        cy.visit('https://b2c.voegol.com.br/compra')
    })
   
})

