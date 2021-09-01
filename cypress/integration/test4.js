describe('Test ke - 4', function () {

    
    it('tc-beli barang', function(){

        //login
        cy.bukaUrl()
        cy.get('#login2').click().wait(3000)
        cy.get('#loginusername').type('dojo-bunga')
        cy.get('#loginpassword').type('bunga')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('#nameofuser').should('have.text' , 'Welcome dojo-bunga').wait(3000)
        //order to buy

        cy.get('footer').scrollIntoView()
        cy.get(':nth-child(7) > .card > .card-block > .card-title > .hrefch')
            .should('have.text' , 'HTC One M9').click().wait(3000) 
        cy.get('.col-sm-12 > .btn').click()
        cy.get('#nava').click()
        cy.get('#cat')
        cy.contains('Laptops').click()
        cy.get('footer').scrollIntoView()
        cy.get(':nth-child(4) > .card > .card-block > .card-title > .hrefch')
            .should('have.text' , 'Dell i7 8gb').click().wait(3000)
        cy.get('.name').should('have.text' , 'Dell i7 8gb').wait(3000)
        cy.get('.col-sm-12 > .btn').click()
        cy.get('#nava').click()
        cy.get('#cat')
        cy.contains('Monitors').click()
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch')
            .should('have.text' , 'Apple monitor 24').click().wait(3000)
        cy.get('.col-sm-12 > .btn').click()
        cy.get(':nth-child(4) > .nav-link').click().wait(3000)
        // cy.get('#tbodyid > :nth-child(1) > :nth-child(2)')
        //     .should('have.text' , 'Apple monitor 24')
        // cy.get('#tbodyid > :nth-child(2) > :nth-child(2)')
        //     .should('have.text' , 'Dell i7 8gb')   
        // cy.get('#tbodyid > :nth-child(3) > :nth-child(2)')
        //     .should('have.text' , 'HTC One M9').wait(3000)
        cy.get('.col-lg-1 > .btn').click()
        cy.get('#name').type('DR')
        cy.get('#country').type('SG')
        cy.get('#city').type('NY')
        cy.get('#card').type('123qwerty')
        cy.get('#month').type('Aug')
        cy.get('#year').type('2022')
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click().wait(3000)
        cy.get('.sweet-alert > h2').should('have.text' , 'Thank you for your purchase!').wait(3000)
        cy.get('.confirm').click()



    }) 


    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})
