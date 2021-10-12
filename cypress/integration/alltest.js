describe("All test cases",() =>{
    it("all test cases possible",() =>{
        //signup
        cy.visit('/signup');
        cy.findByRole('textbox', {  name: /first name/i}).type("Rajan")
        cy.findByRole('textbox', {  name: /last name/i}).type("Shah")
        cy.findByRole('spinbutton', {  name: /entry fee/i}).type("225")
        cy.findByLabelText(/date/i).type("2021-10-09")
        cy.findByRole('textbox', {  name: /user name/i}).type("rajan124");
        cy.findByLabelText(/password/i).type("A012322540");
        cy.findByRole('button', {  name: /create one/i}).click();
        //login
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.findByRole('link', {  name: /login page/i}).click();
        cy.findByRole('textbox', {  name: /user name/i}).type("rajan124");
        cy.findByLabelText(/password/i).type("A012322540")
        cy.findByRole('button', {  name: /login/i}).click()
        //dashboard
    })
})