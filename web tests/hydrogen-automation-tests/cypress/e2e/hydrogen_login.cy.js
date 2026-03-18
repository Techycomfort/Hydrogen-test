
const SELECTORS = {
  email: 'input[type="email"], input[name="email"], input[placeholder*="mail" i]',
  password: 'input[type="password"]',
  submitBtn: 'button[type="submit"], input[type="submit"]',
  errorMsg: '[class*="error"], [class*="alert"], [role="alert"], [class*="toast"]',
};

describe('Hydrogen Pay - Login Page', () => {

  beforeEach(() => {
    cy.visit('/login');
  });


  it('should load the login page successfully', () => {
    cy.url().should('include', '/login');
    cy.title().should('not.be.empty');
  });


  it('should display the login form elements', () => {
    cy.get(SELECTORS.email).should('be.visible');
    cy.get(SELECTORS.password).should('be.visible');
    cy.get(SELECTORS.submitBtn).should('be.visible');
  });


  it('should enable submit button only when form is filled correctly', () => {
    cy.get(SELECTORS.email).first().clear().type(Cypress.env('HYDROGEN_EMAIL'));
    cy.get(SELECTORS.password).first().clear().type(Cypress.env('HYDROGEN_PASSWORD'), { log: false });
    cy.get(SELECTORS.submitBtn).first().should('not.be.disabled');
  });


  it('should show an error message for invalid credentials', () => {
    cy.login('invalid_user@fake.com', 'WrongPassword123!');

    cy.url({ timeout: 8000 }).should('include', '/login');
    cy.get(SELECTORS.errorMsg, { timeout: 8000 }).first().should('be.visible');
  });

});
