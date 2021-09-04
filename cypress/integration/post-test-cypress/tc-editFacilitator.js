describe('Scenario edit facilitator', function () {

    it('tc-01 edit', function(){

        cy.openUrl()
        cy.login()
        cy.get('#dataTable_filter > label > .form-control').type('bunga')
        cy.get('.odd > :nth-child(2)').should('have.text' , 'bunga')
        cy.get('.odd > .dt-center > .btn-group > .btn > .fas').click()
        cy.get('[href="facilitator/detail/333"]' , {force : true}).click()
        cy.get('.mb-4.text-gray-800').should('have.text' , '   Detail Data Fasilitator')
        cy.get('.btn-outline-primary').click()
        cy.get('#img-drag').click().attachFile('download.jpg')
        cy.get('#user_fullname').type(' updated')
        cy.get('#user_email')
            .type('{selectall}' , '{backspace}')
            .type('bunga_updated@dojo.com')
        cy.get('#user_is_active').should('have.value' , '1')
        cy.get('#user_password').type('dojobunga')
        cy.get('#user_province_id')
            .select('DKI JAKARTA')
        cy.get('#user_city_id')
            .select('KOTA ADM. JAKARTA SELATAN')
        cy.get('#user_subdistrict_id')
            .select('Tebet')
        cy.get('#user_address')
            .type('{selectall}' , '{backspace}')
            .type('Pindah alamat Kota Jakarta, kabupaten Jakarta , Provinsi DKI Jakarta')
        cy.get('.custom-control-label').click()
        cy.get('#user_area_province_id')
            .should('have.value','31')
        cy.get('#user_area_city_id')
            .should('have.value','3174')
        cy.get('#user_area_subdistrict_id')
            .should('have.value','317401')
        cy.get('#edit').click()
        cy.get('#modal-body').should('Perubahan fasilitator berhasil diproses')
        cy.get('#generalModal').type('{esc}')

    }) ,

    it('tc-02 cancel edit', function(){

        cy.openUrl()
        cy.login()
        cy.get('#dataTable_filter > label > .form-control').type('bunga')
        cy.get('.odd > :nth-child(2)').should('have.text' , 'bunga updated')
        cy.get('.odd > .dt-center > .btn-group > .btn > .fas').click()
        cy.get('[href="facilitator/detail/333"]' , {force : true}).click()
        cy.get('.mb-4.text-gray-800').should('have.text' , '   Detail Data Fasilitator')
        cy.get('.btn-outline-primary').click()
        cy.get('.mb-4.text-gray-800').should('have.text' , '   Ubah Data Fasilitator')
        cy.get('.btn-outline-primary').click()

    })


    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})
