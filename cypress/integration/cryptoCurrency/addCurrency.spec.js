
/* =====================================
Author: Vinod Mathew
Testing tool: Cypress Version 4.0.2
Node version: v10.15.3
JS Editor: Atom 1.31.2
Operating System: Windows 10
Processor: intelCore i7-7500CPU
RAM : 16 GB
Running on test runner: Chrome 80 and Electron 78
===========================================*/


const c_units = Cypress.env('units');
const c_price = Cypress.env('price');

/*To add Crypto currency */

describe('Add Crypto currency transaction', function () {

    beforeEach(() => {
        cy.clearCookies();
    })

    it('Check the adding/saving of crypto currency transaction record ', function () {
        Cypress.currentTest.retries(1);
        cy.addTransaction();
        cy.get('.TransactionForm_messages__2eGDD > div').invoke('text').then((text) => {
            const unitPrice = text;
            console.log(unitPrice);
            expect(unitPrice).to.be.equal("$500.00 / unit");
        })
        cy.get('button[type="submit"]').contains("Record").click();
        cy.get('.CurrencyList_container__i4zq3 > a > div > div > div ').invoke('text').then((text) => {
            const cryptoListRecord = text;
            const finalStr = cryptoListRecord.substring(0, 8);
            expect(finalStr).to.be.equal("Ethereum");
        })

    })

    it('Verify the number of units purchased and total price paid for the crypto transaction', function () {
        Cypress.currentTest.retries(1);
        cy.addTransaction();
        cy.get('button[type="submit"]').contains("Record").click();
        cy.get('.CurrencyList_container__i4zq3 > a > div > div > div ').invoke('text').then((text) => {
            const cryptoListRecord = text;
            const finalStr = cryptoListRecord.substring(0, 8);
            expect(finalStr).to.be.equal("Ethereum");
        })
        cy.unitsPurchased().should('contain', '5');
        cy.totalPrice().should('contain', '$2500 AUD');
    })

    it('Check whether the validation is happening without filling the Price', function () {
        Cypress.currentTest.retries(1);
        cy.visit('/');
        cy.get('#react-select-2-input').click({force:true});
        cy.get('.css-10nd86i > div > div > div > div > div').contains("Bitcoin").click();
        cy.get('input[name="units"]').type(Cypress.env('units'));
        cy.get('button[type="submit"]').contains("Record").click();
        cy.get('.TransactionForm_messages__2eGDD > div').should('contain', "Enter the purchase price");
    })

});



