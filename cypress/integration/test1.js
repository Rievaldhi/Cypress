/// <reference types = "cypress"/>


it('Test 1' , function () {

    cy.visit('https://demoqa.com/automation-practice-form')
    cy.get('#firstName').type('Rie')
    cy.get('#lastName').type('valdhi')
    cy.get('#userEmail').type('rievaldhi@gmail.com')
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
    cy.get('#userNumber').type('09088976543')
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()
    cy.get('#currentAddress').type('Jakarta')
    cy.get('#submit').click()
    
        
})