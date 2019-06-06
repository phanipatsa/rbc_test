// ****
// * Module Name - endtoend.spec.js
// * Function - To verify user flow from home page to checkout
// ****
//
import { checkServerIdentity } from "tls";

describe('React Shopping Cart End to End Test', () => {
    
    it('Navigate to Application Home Page', () => {
        cy.visit('/')
    })

    it('Select Size L', () => {
        cy.get('[type=checkbox]')
        .each(($el,index,$list) => {
            if (index === 4)
            {
                cy.wrap($el).check({force: true})
            }
        })
        cy.wait(1000)
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

    it('Click Checkout option on Cart', () => {
        cy.get('.buy-btn').click()
    })

    it('Verify Product is added to Cart', () => {
        cy.get('.bag__quantity').should('be.gt', '')
        cy.get('.float-cart__footer').should('be.visible')  
        cy.get('.sub-price__val').should('be.gt', ' ')
    })
})