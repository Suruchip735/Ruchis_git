/// <reference types = "cypress"/>

const { PropertyRead } = require("@angular/compiler")

describe('Covering Cypress core',() => {
    it('Testing basic commands',() => {
        cy.visit('/')

    // Click on Forms 
    cy.contains('Forms').click()

    // Click on form layouts
    cy.contains('Form Layouts').click() 

      cy.get('#exampleInputEmail1').click()
          .parents('form')
          .find('button')
          .should('contain','Submit')
          .parents('form')
          .find('nb-checkbox')
          .click() 

        
        // Testing use of blur() 
        cy.get('#exampleInputEmail1').type('ruchi@gmail.com')
        cy.get('#exampleInputEmail1').blur()


    })
})