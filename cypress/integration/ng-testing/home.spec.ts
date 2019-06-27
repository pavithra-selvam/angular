/// <reference types="Cypress" />

context('Home Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/home')
    })
  
    //home page
    it('Has link to home', () => {
        //cy.pause();
        //cy.contains('type').click();
        cy.get('.active').should('contain','Home');
        cy.wait(5000);
    })  
 })


context('About Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/about')
  })

  //about us page
  it('Has link to about', () => {
    cy.get('.active').should('contain','About');
    cy.wait(5000);
}) 
})

context('Todo Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/todos-api')
  })

  //todos page
  it('Has link to todos-api', () => {
    cy.get('.active').should('contain','Todo');
    cy.wait(5000);
  })

})

context('Stopwatch Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/stopwatch')
  })
 //stopwatch page
  it('Has link to stopwatch', () => {
    cy.get('.active').should('contain','Stopwatch');
    cy.wait(5000);
  })
  
})
  