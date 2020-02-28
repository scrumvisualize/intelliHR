
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


/*Listing and Grouping - Crypto currency */

describe('Listing and Grouping of Crypto currency transaction', function () {
    
    beforeEach(() => {
        cy.clearCookies();
    })

    it('Verify the Listing of Crypto currency', function () {
        Cypress.currentTest.retries(1);
        cy.viewport(1600, 1000);
        cy.addMultipleCurrency();
        cy.get('.CurrencyList_container__i4zq3 > a > div').then(($div) => {
            const currencyListCount = Cypress.$($div).length;
            console.log(currencyListCount);
            var myArr = new Array();
            myArr = ["Ethereum", "Bitcoin", "Litecoin", "XRP"];
            cy.get('.CurrencyOverview_header__15t1q > div').each(($div, i) => {
                expect($div).to.contain(myArr[i]);
            })
        })
    })

    it('Verify the grouping of Crypto currency', function () {
        Cypress.currentTest.retries(1);
        cy.viewport(1600, 1000);
        cy.addGroupTransaction();
        cy.groupTransaction().should('contain', '3');
    })

    it('Verify the display of Total money spend in AUD after the transactions', function () {
        Cypress.currentTest.retries(1);
        cy.viewport(1600, 1000);
        cy.addGroupTransaction();
        cy.get('.Dashboard_container__3CqYQ > div > div > div').eq(1).invoke('text').then((text) => {
            const totalSpend = text;
            console.log(totalSpend);
            expect(totalSpend).to.be.equal("$6250 AUD");
        })

    })
});



