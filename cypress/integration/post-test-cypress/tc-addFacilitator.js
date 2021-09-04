describe('Scenario add facilitator', function () {

    it('tc-01', function(){

        cy.openUrl()
        cy.login()
        cy.get('.d-flex > .btn').click()
        cy.get('input[type = "file"]').attachFile('download.jpg')
        cy.get('#user_fullname').type('bunga')
        cy.get('#user_email').type('bunga@dojo.com')
        cy.get('#user_is_active').should('have.value' , '1')
        cy.get('#user_password').type('dojobunga')
        cy.get('#user_province_id')
            .type('JAMBI{enter}')
        cy.get('#user_city_id')
            .type('JAMBI{enter}')
        cy.get('#user_subdistrict_id')
            .type('JAMBI{enter}')
        cy.get('#user_address').type('Kota jambi, kabupaten Jambi, Provinsi Jambi')
        cy.get('#user_area_province_id')
            .type('DKI{enter}')
        cy.get('#user_area_city_id')
            .contains('KOTA ADM. JAKARTA SELATAN').click()
        cy.get('#user_area_subdistrict_id')
            .type('tebet{enter}')



        
    }) 


    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})
