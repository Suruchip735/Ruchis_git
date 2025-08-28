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

  it.only('Web tables -1',() => {
    cy.visit('/')
    cy.contains('Tables & Data').click()
    cy.contains('Smart Table').click()  

      //1. How to find by text
    cy.get('tbody').contains('tr', 'Larry').then( tableRow => {
        cy.wrap(tableRow).find('.nb-edit').click()
        cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('35')
        cy.wrap(tableRow).find('.nb-checkmark').click()
        cy.wrap(tableRow).find('td').last().should('have.text', '35')
    })

  })
})

