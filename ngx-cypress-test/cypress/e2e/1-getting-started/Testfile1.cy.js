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

        it('Datepickers',() => {
            cy.visit('/')
            cy.contains('Forms').click()
            cy.contains('Datepicker').click()

            // Set the date object to select date after 5 days from today 
            let tDate = new Date()
            tDate.setDate(tDate.getDate() + 5)

            console.log(tDate)
            
            cy.contains('nb-card','Common Datepicker').find('input').then( input => {
                cy.wrap(input).click()
                cy.wait(3500)
                cy.get('.day-cell').not('.bounding-month').contains('21').click({force:true})
                cy.wait(3000)
                
                //Validation to check if correct date is selected 
                cy.wrap(input).invoke('prop','value').should('contain','Jul 21, 2025')
                cy.wrap(input).should('have.value','Jul 21, 2025')
                //cy.wrap(input).invoke('have.value','Jul 21, 2025')
  

            })

        })
        it('Lists and Dropdown', () => {
               cy.visit('/')
               cy.get('nav nb-select').click()
               cy.get('.options-list').contains('Cosmic').click()

               //validate if correct option was selected
               cy.get('nav nb-select').should('contain','Cosmic')

               //Example 1 [select each option from list and validate]
               cy.get('nav nb-select').then( dropDown => {
                    cy.wrap(dropDown).click()
                cy.get('.options-list nb-option').each((listItem, index) => {
                    const itemText = listItem.text().trim()
                    cy.wrap(listItem).click()
                    cy.wrap(dropDown).should('contain', itemText)
                    if(index < 3){
                        cy.wrap(dropDown).click()
                    }
                })
               })
        })

        it.only('Web tables', () => {
            cy.visit('/')
            cy.contains('Tables & Data').click()
            cy.contains('Smart Table').click()
            
            // Update age in the row; get row by text 
            cy.get('tbody').contains('tr','Larry').then( tableRow => {
                cy.wrap(tableRow).find('.nb-edit').click()
                cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('18')
                cy.wrap(tableRow).find('.nb-checkmark').click()
                //Validate if the age is updated to 26  
                cy.wrap(tableRow).find('td').eq(6).should('contain','26')
            
                //Add a row in table; get row by index
                 
            })

        })
        
    })

