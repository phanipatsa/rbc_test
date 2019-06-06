// ****
// * Module Name - addtocart.spec.js
// * Function - To add an item to cart and validate cart contents
// ****
//
describe('Verify Add to Cart on Product Selection', () => {

    it('Navigate to Home Page', () => {
        cy.visit('/')
    })

    it('Select 1st Product', () => {
        cy.get('.shelf-item')
        .each(($el,index,$list) => {
            if (index === 0)
            {
                cy.wrap($el).click()
            }
        })
    })

    it('Verify Product is added to Cart', () => {
        cy.get('.bag__quantity').should('be.gt', '')
        cy.get('.float-cart__footer').should('be.visible')  
        cy.get('.sub-price__val').should('be.gt', ' ')
    })
})