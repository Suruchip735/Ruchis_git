function selectGroupMenuItem(groupItemName)
{
    cy.contains('a',groupItemName).invoke('attr','aria-expanded').then( attr => {
        if(attr.includes('false')){
            cy.contains('a',groupItemName).click()
        }
    })
}

class NavigationPage{
    //Methods 
    formsLayoutPage()
    {
    //cy.visit('/')
    selectGroupMenuItem('Forms')
    //cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
    }
 
    Datepicker() {
    selectGroupMenuItem('Forms')
    cy.contains('Datepicker').click()
    }

    DialogPage()
    {
        selectGroupMenuItem('Modal & Overlays')
        //cy.contains('Modal & Overlays').click()
        cy.contains('Dialog').click()
    }

    WindowPage()
    {
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Window').click()
    }

    PopoverPage() {
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Popover').click()
    }

    ToastrPage() {
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Toastr').click()
    }

    TooltipPage()
    {
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Tooltip').click()
    }

    CalendarPage()
    {
        //cy.contains('Extra Components').click()
        selectGroupMenuItem('Extra Components')
        cy.contains('Calendar').click()
    }

    Drag_DropPage()
    {
       selectGroupMenuItem('Extra Components') 
       cy.contains('Drag & Drop').click()
    }
    
    EchartsPage()
    {
        selectGroupMenuItem('Charts')
        cy.contains('Echarts').click()

    }

    SmartTablePage()
    {
        selectGroupMenuItem('Tables & Data')
        //cy.contains('Tables & Data').click()  
        cy.contains('Smart Table').click()

    }

    TreeGrid()
    {
        //cy.contains('Tables & Data').click() 
        selectGroupMenuItem('Tables & Data')
        cy.contains('Tree Grid').click()
    }


}

export const navigateTo = new NavigationPage()

 