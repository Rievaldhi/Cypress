describe('Test ke - 3', function () {

    it('tc-regis', function(){

        cy.bukaUrl()
        cy.get('#signin2').click().wait(3000)
        cy.get('#sign-username').type('dojo-bunga')
        cy.get('#sign-password').type('bunga')
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-header > .close > span').click()

    }) 


    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})
