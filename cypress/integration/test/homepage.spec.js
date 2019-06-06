// ****
// * Module Name - homepage.spec.js
// * Function - To navigate to home page and verify if page loaded correctly
// ****
//
describe('React Shopping Cart Home Page', () => {
    it('Navigate to Application Home Page', () => {
        cy.visit('/')
    })

    it ('Verify Page Title is - React Shopping Cart', () => {
        cy.title().should('eq','React Shopping Cart') 
    })

    it('Verify Page Loaded Successfully with products', () => {
        cy.get('.products-found')
        .contains('Product(s) found')
    })
})