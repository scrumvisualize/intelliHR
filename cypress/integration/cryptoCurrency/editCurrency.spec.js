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


/*Edit Crypto currency transaction:- */

describe('Edit Crypto currency transaction', function () {

    beforeEach(() => {
        cy.clearCookies();
    })

    it('Verify the editting of Crypto transaction record', function () {
        cy.addTransaction();
        cy.get('button[type="submit"]').contains("Record").click();
        cy.get('.CurrencyList_container__i4zq3 > a').click();
        cy.editTransaction();
        cy.backToDashboard();
        cy.unitsPurchased().should('contain', '10');
        cy.totalPrice().should('contain', '$3500 AUD');
    })

});
