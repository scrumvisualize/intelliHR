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


/*Delete Crypto currency record:- */

describe('Delete a Crypto currency transaction', function () {

  beforeEach(() => {
    cy.clearCookies();
  })

  it('Verify the deleting of crypto transaction record', function () {
    Cypress.currentTest.retries(1);
    cy.addTransaction();
    cy.get('button[type="submit"]').contains("Record").click();
    cy.get('.CurrencyList_container__i4zq3 > a').click();
    cy.deleteTransaction();
    cy.get('.Dashboard_container__3CqYQ > div').eq(1).invoke('text').should('include', 'Record a transaction to get started.')
  })
});
