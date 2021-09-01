describe('Test ke - 3', function () {

    it('tc-regis', function(){

        cy.bukaUrl()
        cy.get('#login2').click().wait(3000)
        cy.get('#loginusername').type('dojo-bunga')
        cy.get('#loginpassword').type('bunga')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('#nameofuser').should('have.text' , 'Welcome dojo-bunga').wait(3000)
    }) 


    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})
