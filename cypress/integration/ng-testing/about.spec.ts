/// <reference types="Cypress" />

context('About Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/about')
    })
  
    it('Has link to about', () => {
        cy.get('.active').should('contain','About');
        cy.wait(5000);
    })
  
  })
  