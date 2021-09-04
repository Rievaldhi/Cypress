describe('Scenario login', function () {

    it('tc-login logout', function(){

        cy.openUrl()
        cy.get('#input-email').type('e@dojobox.id')
        cy.get('#input-password').type('admin')
        cy.get('#btn-login').click()
        cy.get('.mr-2 > b').should('have.text' , 'Super Admin')
        cy.get('#userDropdown').click()
        cy.get('.dropdown-menu > [href="#"]').contains('Keluar').click()
        cy.get('.modal-footer > .btn-primary').click()
        cy.get('.h4').should('have.text' , 'Welcome Back!')

    }) ,

    it('tc - login wrong username' , function(){

        cy.openUrl()
        cy.get('#input-email').type('wrong@username.id')
        cy.get('#input-password').type('admin')
        cy.get('#btn-login').click()
        cy.get('.modal-body').should('have.text' , 'Nama Pengguna atau Kata Sandi Anda tidak cocok')
        cy.get('.close > span' , {force : true}).click()

    }) , 

    it('tc - empty form login' , function(){

        cy.openUrl()
        cy.get('#btn-login').click()
        cy.get('.modal-body > :nth-child(1)').should('have.text' , 'Email tidak boleh kosong')
        cy.get('.modal-body > :nth-child(3)').should('have.text' , 'Password tidak boleh kosong')
        cy.get('#exampleModalLabel').should('have.text' , 'Error !').wait(1000)       
        cy.get('.close > span' , {force : true}).click()

    })


    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})
