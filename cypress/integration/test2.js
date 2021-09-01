describe('Test ke - 2', function () {
    it('tc-1', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('#et_pb_contact_name_0').type('Rievaldhi')
        cy.get('#et_pb_contact_email_0').type('rievaldhi@gmail.com')
        cy.get('.et_pb_contact_submit').click()
        cy.get('#simpleElementsLink').click()
        cy.get('.entry-title').should('have.text' , 'Link success')
    }) ,
    it(' tc-2 ' , function () {

        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('[value="male"]').click()
                
    }) , 
    it(' tc-3 ' , function () {

        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('[value="Bike"]').click()
        cy.get('[value="Car"]').click()
                
    }) , 
    it(' tc-4 ' , function () {

        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('select').select('Audi')       
                
    }) , 
    it(' tc-5 ' , function () {

        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button').click()
        cy.get('.entry-title').should('have.text' , 'Button success')
                
    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})
