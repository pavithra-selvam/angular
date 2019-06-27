/// <reference types="Cypress" />

context('Home Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/home')
    })
  
    it('Has link to home', () => {
        //cy.pause();
        //cy.contains('type').click();
        cy.get('.active').should('contain','Home');
        cy.wait(5000);
    })
  
  })
  