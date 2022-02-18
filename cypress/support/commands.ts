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

declare global {
    namespace Cypress {
      interface Chainable {
        acceptDisclaimer: typeof accept_disclaimer;
        navigate: typeof navigate;
        selectTab: typeof select_tab;
      }
    }
  }

export const accept_disclaimer = () => {
    const accept_button_locator = '#onetrust-accept-btn-handler'
    cy.get(accept_button_locator).click();
}

export const navigate = (url: string) => {
  cy.visit(url);
}

export const select_tab = (tab: string) => {
  const tab_list_locator = "//a[contains(@class,'menuTop__item')]"
  cy.xpath(tab_list_locator).contains(tab).click();
}

Cypress.Commands.add("acceptDisclaimer", accept_disclaimer);
Cypress.Commands.add("navigate", navigate);
Cypress.Commands.add("selectTab", select_tab);