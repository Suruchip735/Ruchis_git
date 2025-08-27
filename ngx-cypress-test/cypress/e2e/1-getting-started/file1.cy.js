/// <reference types = "cypress"/>

const { PropertyRead } = require("@angular/compiler")

describe('First test suite',() => {

    it('first test',() => {
        // place the code for the first test
        //find elements by tag name
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.get('input')
        // find element by ID
        cy.get('#inputEmail1')
        
       //find by class name
        cy.get('.input-full-width')

        // find by attribute name
        cy.get('[fullwidth]')

        //find by attribute and value
        cy.get('[placeholder="Email"]')

        //find by entire class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        //finding element by 2 elements
        cy.get('[placeholder="Email"][fullwidth]')
        
        //finded element by test ID
        cy.get('[data-cy="imputEmail1"]')
    })

    it('second-test',() => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        //cy.contains('[status="primary"]','Sign in')
        //  cy.contains('nb-card','Horizontal form').find('button')


        // Cypress chaining 
        //cy.get()
        cy.get('#exampleInputEmail1').click()
          .parents('form')
          .find('button')
          .should('contain','Submit')
          .parents('form')
          .find('nb-checkbox')
          .click()


    })
    //Learning "save subject of the command"
    it('third-test',() => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain','Email').click()
        cy.contains('nb-card','Using the Grid').find('[for="inputPassword2"]').should('contain','Password').click()
    
        //Approach1 for the above task
        // app1: using alias
        cy.contains('nb-card','Using the Grid').as('usingTheGrid')
        cy.get('@usingTheGrid').find('[for="inputEmail1"]').should('contain','Email').click()
        cy.get('@usingTheGrid').find('[for="inputPassword2"]').should('contain','Password').click()

        //app2: using then methods()
        cy.contains('nb-card','Using the Grid').then( usingTheGridForm => {
            cy.wrap(usingTheGridForm).find('[for="inputEmail1"]').should('contain','Email')
            cy.wrap(usingTheGridForm).find('[for="inputPassword2"]').should('contain','Password')
        })
        
    })

    //Extracting text values from the webpage
    it('third-test',() => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        //#1
        cy.get('[for="exampleInputEmail1"]').should('contain','Email address')
        
        //#2 [Jquery method]
        cy.get('[for="exampleInputEmail1"]').should('contain','Email address').then( label => {
            const labelText = label.text()
            expect(labelText).to.equal('Email address')
            cy.wrap(labelText).should('contain','Email address')
        })

        
        //#3 [Cypress method]
        cy.get('[for="exampleInputEmail1"]').invoke('text').then( text => {
            expect(text).to.equal('Email address')
        })
        
        //#4
        cy.get('[for="exampleInputEmail1"]').invoke('attr','class').then( classValue => {
            expect(classValue).to.equal('label')
        })  

        //#5 invoking values from the property using invoke() if values are hidden in props
        cy.get('#exampleInputEmail1').type('test@test.com')
        cy.get('#exampleInputEmail1').invoke('prop','value').should('contain','test@test.com').then( property => {
            expect(property).to.equal('test@test.com')
        })

        })

        it('radioButtons', () => {
            cy.visit('/')
            cy.contains('Forms').click()
            cy.contains('Form Layouts').click()
            // this method can be used only if type=radio 

        })

        it.only('Datepickers',() => {
            cy.visit('/')
            cy.contains('Forms').click()
            cy.contains('Datepicker').click()

            cy.contains('nb-card','Common Datepicker').find('ínput').then( input => {
                cy.wrap(input).click()
                cy.get('.day-cell').not('.bounding-month').contains('21').click()
                cy.wrap(input).invoke('prop','value').should('contain','Sep 21, 2023')
            })

        })
        
    })

