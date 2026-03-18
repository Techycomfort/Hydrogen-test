// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const SELECTORS = {
  email: 'input[type="email"], input[name="email"], input[placeholder*="mail" i]',
  password: 'input[type="password"]',
  submitBtn: 'button[type="submit"], input[type="submit"]',
};

Cypress.Commands.add('login', (email, password) => {
  cy.get(SELECTORS.email).first().clear().type(email);
  cy.get(SELECTORS.password).first().clear().type(password, { log: false });
  cy.get(SELECTORS.submitBtn).first().click();
});