/// <reference types="cypress" />

describe('Exercise', () => {
    it('loads', ()=> {
        /** Your code below */
    
        cy.visit('/');
        ;cy.get('.App-link').should('be.visible');
        /** Your code above */
    })
    
    it('link goes to ultimateqa', ()=> {
        /** Your code below */
    
        cy.visit('/'); // to go to the app url
        cy.get('.App-link').should('have.attr', 'href').and('include', 'ultimateqa.com');
    
        /** Your code above */
    })
    
    it('should open link in new tab',()=> {
        /** Your code below */
    
        cy.visit('/');
        cy.get('.App-link').should('have.attr', 'target').and('include', '_blank');
    
        /** Your code above */
    })  
})
