
/**
 * This command allows to open the home page and assert the url easily.
 */
Cypress.Commands.add('openHomePage', ()=>{
    cy.visit('/')
    cy.url().should('eq', 'https://automationintesting.online/')
})
