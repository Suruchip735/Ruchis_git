const { navigateTo } = require("../page-objects/navigationPage")
const { onFormLayoutsPage } = require("../page-objects/formLayoutsPage.cy")

describe('Çreating page objects', () => {

    it('Creating navigation page object',() => {
        cy.openHomePage() 
        navigateTo.formsLayoutPage()
        navigateTo.Datepicker()
        navigateTo.ToastrPage()
        navigateTo.TooltipPage()  
    
        
    })
    it.only('Testing with page object',() => {
        cy.openHome()
        navigateTo.formsLayoutPage()
        onFormLayoutsPage.submitUsingTheGridForm('testQA1@yopmail.com','7912',2)  

        onFormLayoutsPage.submitBasicForm('artem@udemy','Welcome',true)
        navigateTo.Datepicker()

    })

})    

