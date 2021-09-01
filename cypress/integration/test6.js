describe('Test day 2', function () {

    it('tc-validasi form', function(){

        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').type('Rie')
        cy.get('#lastName').type('valdhi')
        cy.get('#userEmail').type('rievaldhi@gmail.com')
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
        cy.get('#userNumber').type('0908897654')
        cy.get('#dateOfBirthInput' , {force : true})
            .click().type('{selectall}' , '{backspace}').type('01 May 2000').type('{enter}')
        cy.get('.subjects-auto-complete__value-container').type('English{enter}')
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()
        cy.get('#uploadPicture').attachFile('download.jpg')
        cy.get('#currentAddress').type('Jakarta')
        cy.get('#stateCity-wrapper > :nth-child(2)')
            .type('Uttar{enter}')
        cy.get('#stateCity-wrapper > :nth-child(3)').type('Agra{enter}')
        cy.get('#submit').click()


        //validation
        cy.get('tbody > :nth-child(1) > :nth-child(2)').should('have.text' , 'Rie valdhi')
        cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text' , 'rievaldhi@gmail.com')
        cy.get('tbody > :nth-child(3) > :nth-child(2)').should('have.text' , 'Male')
        cy.get('tbody > :nth-child(4) > :nth-child(2)').should('have.text' , '0908897654')
        cy.get('tbody > :nth-child(6) > :nth-child(2)').should('have.text' , 'English')
        cy.get('tbody > :nth-child(7) > :nth-child(2)').should('have.text' , 'Sports')
        cy.get('tbody > :nth-child(9) > :nth-child(2)').should('have.text' , 'Jakarta')
        cy.get('tbody > :nth-child(10) > :nth-child(2)').should('have.text' , 'Uttar Pradesh Agra')
        cy.get('#closeLargeModal').scrollIntoView()
        cy.get('#closeLargeModal').click()

    }) 


    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})
