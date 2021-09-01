describe('Test ke - 3', function () {

    it('tc-beli', function(){

        cy.bukaUrl()
        cy.get(':nth-child(3) > .card > .card-block > .card-title > .hrefch').click().wait(3000)
        cy.get('.col-sm-12 > .btn').click()
        cy.get(':nth-child(4) > .nav-link').click()
        cy.get('.col-lg-1 > .btn').click()
        cy.get('#name').type('DR')
        cy.get('#country').type('SG')
        cy.get('#city').type('NY')
        cy.get('#card').type('123qwerty')
        cy.get('#month').type('Aug')
        cy.get('#year').type('2022')
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('.sweet-alert > h2').should('have.text' , 'Thank you for your purchase!').wait(300)
        cy.get('.confirm').click()



    }) 


    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})
