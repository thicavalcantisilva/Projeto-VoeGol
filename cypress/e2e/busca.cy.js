describe('Busca de passagens',()=>{
    it('Usuario deve fazer busca de passagens',()=>{
        cy.viewport(1440, 900)
        cy.visit('https://b2c.voegol.com.br/compra')
        cy.get('[id="onetrust-accept-btn-handler"]').click() //Aceita cookies do site
        cy.get('[id="tab-"]').should('have.text',' Comprar passagem ')

     
    })
})
