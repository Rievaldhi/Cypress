describe('Scenario add facilitator', function () {

    // it('tc-01 fill all field', function(){

    //     cy.openUrl()
    //     cy.login()
    //     cy.get('.d-flex > .btn').click()
    //     cy.get('input[type = "file"]').attachFile('download.jpg')
    //     cy.get('#user_fullname').type('bunga')
    //     cy.get('#user_email').type('bunga@dojo.com')
    //     cy.get('#user_is_active').should('have.value' , '1')
    //     cy.get('#user_password').type('dojobunga')
    //     cy.get('#user_province_id')
    //         .select('JAMBI')
    //     cy.get('#user_city_id')
    //         .select('KOTA JAMBI')
    //     cy.get('#user_subdistrict_id')
    //         .select('Pasar Jambi')
    //     cy.get('#user_address').type('Kota jambi, kabupaten Jambi, Provinsi Jambi')
    //     cy.get('#user_area_province_id')
    //         .select('DKI JAKARTA')
    //     cy.get('#user_area_city_id')
    //         .select('KOTA ADM. JAKARTA SELATAN')
    //     cy.get('#user_area_subdistrict_id')
    //         .select('Tebet')
    //     cy.get('#add').click()
    //     cy.get('#modal-body').should('have.text' , 'Penambahan fasilitator berhasil diproses')
    //     cy.get('#generalModal').type('{esc}')
        
    // }) ,

    // it('tc-02 swtich on button' , function(){
    //     cy.openUrl()
    //     cy.login()
    //     cy.get('.d-flex > .btn').click()
    //     cy.get('input[type = "file"]').attachFile('download.jpg')
    //     cy.get('#user_fullname').type('bunga1')
    //     cy.get('#user_email').type('bunga1@dojo.com')
    //     cy.get('#user_is_active').should('have.value' , '1')
    //     cy.get('#user_password').type('dojobunga1')
    //     cy.get('#user_province_id')
    //         .select('DKI JAKARTA')
    //     cy.get('#user_city_id')
    //         .select('KOTA ADM. JAKARTA SELATAN')
    //     cy.get('#user_subdistrict_id')
    //         .select('Tebet')
    //     cy.get('#user_address').type('Kota Jakarta, kabupaten Jakarta , Provinsi DKI Jakarta')
    //     cy.get('.custom-control-label').click()
    //     cy.get('#user_area_province_id')
    //         .should('have.value','31')
    //     cy.get('#user_area_city_id')
    //         .should('have.value','3174')
    //     cy.get('#user_area_subdistrict_id')
    //         .should('have.value','317401')
    //     cy.get('#add').click()
    //     cy.get('#modal-body').should('have.text' , 'Penambahan fasilitator berhasil diproses')
    //     cy.get('#generalModal').type('{esc}')
    // }) , 

    // it('tc-03 email already exist' , function(){

    //     cy.openUrl()
    //     cy.login()
    //     cy.get('.d-flex > .btn').click()
    //     cy.get('input[type = "file"]').attachFile('download.jpg')
    //     cy.get('#user_fullname').type('bunga1')
    //     cy.get('#user_email').type('bunga1@dojo.com')
    //     cy.get('#user_is_active').should('have.value' , '1')
    //     cy.get('#user_password').type('dojobunga1')
    //     cy.get('#user_province_id')
    //         .select('DKI JAKARTA')
    //     cy.get('#user_city_id')
    //         .select('KOTA ADM. JAKARTA SELATAN')
    //     cy.get('#user_subdistrict_id')
    //         .select('Tebet')
    //     cy.get('#user_address').type('Kota Jakarta, kabupaten Jakarta , Provinsi DKI Jakarta')
    //     cy.get('.custom-control-label').click()
    //     cy.get('#user_area_province_id')
    //         .should('have.value','31')
    //     cy.get('#user_area_city_id')
    //         .should('have.value','3174')
    //     cy.get('#user_area_subdistrict_id')
    //         .should('have.value','317401')
    //     cy.get('#add').click()
    //     cy.get('#modal-body').should('have.text' , 'Email sudah digunakan')
    //     cy.get('#generalModal > .modal-dialog > .modal-content > .modal-header > .close > span').type('{esc}')
            

    // }) , 

    it('tc-04 blank form submit' , function(){

        cy.openUrl()
        cy.login()
        cy.get('.d-flex > .btn').click()
        cy.get('#add').click()
        cy.get('#modal-title').should('have.text' , 'Error !')
        cy.get('#modal-body')
            .should('have.text' , 'Nama tidak boleh kosongEmail tidak boleh kosongPassword tidak boleh kosongProvinsi tidak boleh kosongKota/Kabupaten tidak boleh kosongKecamatan tidak boleh kosongAlamat tidak boleh kosong')
            .type('{esc}').wait(1000)
        cy.get('#user_fullname').should('not.have.text')

    })


    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})
