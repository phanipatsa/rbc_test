// ****
// * Module Name - verifysizes.spec.js
// * Function - To Verify if all sizes are available in UI
// ****
//
describe('Verify all available Sizes', () => {

    it('Navigate to Home Page', () => {
        cy.visit('/')
    })

    it('Verify Size XS', () => {
        cy.get('.checkmark')
        .contains('XS')
        .contains('XS')
    })

    it('Verify Size S', () => {
        cy.get('.checkmark')
        .contains('S')
        .contains('S')
    })

    it('Verify Size M', () => {
        cy.get('.checkmark')
        .contains('M')
        .contains('M')
    })

    it('Verify Size ML', () => {
        cy.get('.checkmark')
        .contains('ML')
        .contains('ML')
    })

    it('Verify Size L', () => {
        cy.get('.checkmark')
        .contains('L')
        .contains('L')
    })

    it('Verify Size XL', () => {
        cy.get('.checkmark')
        .contains('XL')
        .contains('XL')
    })

    it('Verify Size XXL', () => {
        cy.get('.checkmark')
        .contains('XXL')
        .contains('XXL')
    })
})