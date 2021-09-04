describe('Scenario deactivated facilitator', function () {

    it('tc-01 nonactivate facilitator', function(){

        cy.openUrl()
        cy.login()
        cy.get('#dataTable_filter > label > .form-control').type('bunga')
        cy.get('.even > :nth-child(2)').should('have.text' , 'bunga1')
        cy.get('.even > .dt-center > .btn-group > .btn > .fas').click()
        cy.get('.even > .dt-center > .btn-group > .dropdown-menu > span.dropdown-item').click()
        cy.get('#modal-body').should('have.text' , 'Perubahan fasilitator berhasil diproses').wait(1000)
        cy.get('#modal-body').type('{esc}')
        cy.get('.even > :nth-child(4)').should('have.text' , 'Nonaktif')

    }) 


    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})
