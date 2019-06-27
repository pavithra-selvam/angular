/// <reference types="Cypress" />

context('Todo Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/todos-api')
    })
  
    it('Has link to todos-api', () => {
        cy.get('.active').should('contain','Todo');
        cy.wait(5000);
    })
  
  })
  