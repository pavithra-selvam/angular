/// <reference types="Cypress" />

context('Stopwatch Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/stopwatch')
    })
  
    it('Has link to stopwatch', () => {
        cy.get('.active').should('contain','Stopwatch');
        cy.wait(5000);
    })
  
  })
  