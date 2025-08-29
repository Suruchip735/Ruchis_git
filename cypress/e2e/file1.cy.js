describe('template spec', () => {
  it('Input fields', () => {
    //cy.visit('https://example.cypress.io')
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    cy.get('#inputEmail1').type('Hello Ruchi')
    .press(Cypress.Keyboard.Keys.TAB) // same as pressing tab key 
  }),

  it('Checkboxes',() => {
    cy.visit('/')
    cy.contains('Modal & Overlays').click()
    cy.contains('Toastr').click()
    // --Case 1: Check all checkboxes isible 
    cy.get('[type="checkbox"]').check({force:true})

    // ---Case 2: Uncheck all checkboxes visible 
        cy.get('[type="checkbox"]').uncheck({force:true})
  }),

  it('Tooltips',() => {
    cy.visit('/')
    cy.contains('Modal & Overlays').click()
    cy.contains('Tooltip').click()
    cy.contains('button','Top').trigger('mouseenter')
    cy.get('nb-tooltip').should('have.text','This is a tooltip')
  }),
  it('Dialog Boxes',() =>{
    cy.visit('/')
    cy.contains('Tables & Data').click()
    cy.contains('Smart Table').click()
    cy.get('.nb-trash').first().click() 

  // Clicking on dialog box 
  // Method 1 
  //1.
    cy.get('.nb-trash').first().click()
    cy.on('window:confirm', confirm => {
        expect(confirm).to.equal('Are you sure you want to delete?')
    })

    //Method 2
    cy.window().then( win => {
        cy.stub(win, 'confirm').as('dialogBox').returns(false)
    })
    cy.get('.nb-trash').first().click()
    cy.get('@dialogBox').should('be.calledWith', 'Are you sure you want to delete?')


  })

  it('Web tables -1',() => {
    cy.visit('/')
    cy.contains('Tables & Data').click()
    cy.contains('Smart Table').click()  
    /*
      //1. How to find by text 
    cy.get('tbody').contains('tr', 'Larry').then( tableRow => {
        cy.wrap(tableRow).find('.nb-edit').click()
        cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('35')
        cy.wrap(tableRow).find('.nb-checkmark').click() 
        cy.wrap(tableRow).find('td').last().should('have.text', '35')
        
        //Find by index 
        cy.get('.nb-plus').click()

        cy.get('thead tr').eq(2).then(tableRow => {
          cy.wrap(tableRow).find('[placeholder="ID"]').type('510')
          cy.wrap(tableRow).find('[placeholder="First Name"]').type('Sophie')
          cy.wrap(tableRow).find('[placeholder="Last Name"]').type('James')
          cy.get('.nb-checkmark').click()

          //Validate entered data 

          cy.get('tbody tr').first().find('td').then( tableColumns => {
            cy.wrap(tableColumns).eq(1).should('have.text','510')
            cy.wrap(tableColumns).eq(2).should('have.text','Sophie')
            cy.wrap(tableColumns).eq(3).should('have.text','James')  
          
          }) */  

          // Looping through the row 
        const  ages = [45,20,30,21,43]
        
        cy.wrap(ages).each(age => {
          cy.get('[placeholder="Age"]').clear()
              cy.get('[placeholder="Age"]').type(age)
        cy.wait(500)
        cy.get('tbody tr').each( tableRows => {
          cy.wrap(tableRows).find('td').last().should('have.text',age)
        })
        })
    
        })

        it('Sliders',() => {
          cy.visit('/')
          cy.get('[tabtitle="Temperature"] circle')
            .invoke('attr','cx','269.387')
            .invoke('attr','cy','119.50')
            .click()

        cy.get('[class="value temperature h1"]').should('contain.text','26')

        })

        it('Drag and Drop',() => {
          cy.visit('/')
          cy.contains('Extra Components').click()
          cy.contains('Drag & Drop').click()

          cy.get('#todo-list div').eq(2).trigger('dragstart') 

          cy.get('#drop-list').trigger('drop')
        })

        it.only('Cypress - iFrames',() => {
          cy.visit('/')
          cy.contains('Modal & Overlays').click()
          cy.contains('Dialog').click() 
          cy.frameLoaded('[data-cy="esc-close-iframe"]')
          

          cy.iframe().contains('Open Dialog with esc close').click()

          cy.contains('Dismiss Dialog').click()

          cy.enter('[data-cy="esc-close-iframe"]').then( getBody => {
            getBody().contains('Open Dialog with esc close').click()
            cy.contains('Dismiss Dialog').click()
            getBody().contains('Open Dialog without esc close').click()
            cy.contains('OK').click()
          })
         
        })
    })

