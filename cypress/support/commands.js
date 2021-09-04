// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//add commands for visit web
Cypress.Commands.add('openUrl' , () => {

    cy.visit('https://admin.pkh.dojobox.id/')

}); 

Cypress.Commands.add('login' , () => {

    cy.get('#input-email').type('e@dojobox.id')
    cy.get('#input-password').type('admin')
    cy.get('#btn-login').click()
    cy.get('.mr-2 > b').should('have.text' , 'Super Admin')
}); 

//add library for upload file with cypress
import "cypress-file-upload";