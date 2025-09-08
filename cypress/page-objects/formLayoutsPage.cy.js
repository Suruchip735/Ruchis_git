
class FormLayoutsPage {
/**  
 * Method to submit "Using The Grid" form with valid user credentials 
 * @param {string} email - valid user email
 * @param {string} password = valid password for user 
 * @param {number} optionIndex - provide index value for the radio button to be selected (Index starts with 0)
*/

    submitUsingTheGridForm(email, password, optionIndex)
    {
        cy.contains('nb-card','Using the Grid').then(form => {
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[type="password"]').type(password)

            cy.wrap(form).find('[type="radio"]').eq(optionIndex).check({force:true})
          //  cy.wrap(form).eq(optionIndex).check({force:true})
            cy.contains('Sign in')
        })   
    }

    // Creating method for submitting "Basic Form" on Form Layouts page  
    submitBasicForm(email, password, isChecked)
    {
        cy.contains('nb-card','Basic form').then( form => {
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[type="password"]').type(password) 

            // Check if checkbox needs to be checked or not 

            if(isChecked)
            {
                cy.wrap(form).find('[type="checkbox"]').check({force:true})
            } 
        })

    }
}   


export const onFormLayoutsPage = new FormLayoutsPage()
