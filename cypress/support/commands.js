import { cyan } from "color-name"

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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add('addTransaction', () => {
 cy.visit('/');
 cy.get('#react-select-2-input').click({force:true});
 cy.get('.css-10nd86i > div > div > div > div > div').contains("Ethereum").click();
 cy.get('input[name="units"]').type(Cypress.env('units'));
 cy.get('input[name="price"]').type(Cypress.env('price'));
})

Cypress.Commands.add('groupTransaction', () => {
    return cy.get('.CurrencyOverview_value__2pPWK').eq(0).invoke('text');
})

Cypress.Commands.add('unitsPurchased', () => {
    return cy.get('.CurrencyOverview_details__1UHq_ > div > div').eq(3).invoke('text');
})

Cypress.Commands.add('totalPrice', () => {
    return cy.get('.CurrencyOverview_details__1UHq_ > div > div').eq(5).invoke('text');
})

Cypress.Commands.add('backToDashboard', () => {
   cy.get('a > .TransactionList_go-back__2BrTY').contains("Back to Dashboard").click();
})


Cypress.Commands.add('editTransaction', () => {
cy.get('.TransactionList_controls__-Ag85 > div > div > svg').eq(0).click();
cy.get('input[name="units"]').clear().type(Cypress.env('modifiedUnits'));
cy.get('input[name="price"]').clear().type(Cypress.env('modifiedPrice'));
cy.get('button[type="submit"]').contains("Save").click();
})


Cypress.Commands.add('deleteTransaction', () => {
cy.get('.TransactionList_controls__-Ag85 > div > div > svg').eq(1).click();
})


Cypress.Commands.add('addMultipleCurrency', () => {
    cy.visit('/');
    cy.get('#react-select-2-input').click({force:true});
    cy.get('.css-10nd86i > div > div > div > div > div').contains("Ethereum").click();
    cy.get('input[name="units"]').type(Cypress.env('units'));
    cy.get('input[name="price"]').type(Cypress.env('price'));
    cy.get('button[type="submit"]').contains("Record").click();
    cy.get('#react-select-2-input').click({force:true});
    cy.get('.css-10nd86i > div > div > div > div > div').contains("Bitcoin").click();
    cy.get('input[name="units"]').type(Cypress.env('units'));
    cy.get('input[name="price"]').type(Cypress.env('price'));
    cy.get('button[type="submit"]').contains("Record").click();
    cy.get('#react-select-2-input').click({force:true});
    cy.get('.css-10nd86i > div > div > div > div > div').contains("Litecoin").click();
    cy.get('input[name="units"]').type(Cypress.env('units'));
    cy.get('input[name="price"]').type(Cypress.env('price'));
    cy.get('button[type="submit"]').contains("Record").click();
    cy.get('#react-select-2-input').click({force:true});
    cy.get('.css-10nd86i > div > div > div > div > div').contains("XRP").click();
    cy.get('input[name="units"]').type(Cypress.env('units'));
    cy.get('input[name="price"]').type(Cypress.env('price'));
    cy.get('button[type="submit"]').contains("Record").click();
    cy.get('#react-select-2-input').click({force:true});
    cy.get('.css-10nd86i > div > div > div > div > div').contains("Bitcoin").click();
    cy.get('input[name="units"]').type('10');
    cy.get('input[name="price"]').type('250');
    cy.get('button[type="submit"]').contains("Record").click();
    cy.get('#react-select-2-input').click({force:true});
    cy.get('.css-10nd86i > div > div > div > div > div').contains("Ethereum").click();
    cy.get('input[name="units"]').type('15');
    cy.get('input[name="price"]').type('500');
    cy.get('button[type="submit"]').contains("Record").click();
   })


   Cypress.Commands.add('addGroupTransaction', () => {
    cy.visit('/');
    cy.get('#react-select-2-input').click({force:true});
    cy.get('.css-10nd86i > div > div > div > div > div').contains("Ethereum").click();
    cy.get('input[name="units"]').type(Cypress.env('units'));
    cy.get('input[name="price"]').type(Cypress.env('price'));
    cy.get('button[type="submit"]').contains("Record").click();
    cy.get('#react-select-2-input').click({force:true});
    cy.get('.css-10nd86i > div > div > div > div > div').contains("Bitcoin").click();
    cy.get('input[name="units"]').type(Cypress.env('units'));
    cy.get('input[name="price"]').type(Cypress.env('price'));
    cy.get('button[type="submit"]').contains("Record").click();
    cy.get('#react-select-2-input').click({force:true});
    cy.get('.css-10nd86i > div > div > div > div > div').contains("Bitcoin").click();
    cy.get('input[name="units"]').type('10');
    cy.get('input[name="price"]').type('250');
    cy.get('button[type="submit"]').contains("Record").click();
    cy.get('#react-select-2-input').click({force:true});
    cy.get('.css-10nd86i > div > div > div > div > div').contains("Ethereum").click();
    cy.get('input[name="units"]').type('15');
    cy.get('input[name="price"]').type('500');
    cy.get('button[type="submit"]').contains("Record").click();
    cy.get('#react-select-2-input').click({force:true});
    cy.get('.css-10nd86i > div > div > div > div > div').contains("Ethereum").click();
    cy.get('input[name="units"]').type('15');
    cy.get('input[name="price"]').type('500');
    cy.get('button[type="submit"]').contains("Record").click();
   })

