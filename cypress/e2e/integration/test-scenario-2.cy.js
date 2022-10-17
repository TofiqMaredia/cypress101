describe('Test Scenario', () => {

    before(() => {
      cy.visit('/selenium-playground');
      cy.viewport('samsung-note9');
    });

    it.only('Test Scenario 2', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.wait(5000).contains('Input Form Submit').click();
      //Accessibility check
      cy.injectAxe();
      cy.checkA11y(null, {
        includedImpacts: ['critical']
      })
      cy.get('#name').type('Tofiq');
      cy.get('#inputEmail4').type('tofiqsmaredia@gmail.com');
      cy.get('#inputPassword4').type('Test1234');
      cy.get('#company').type('LambdaTest');
      cy.get('#websitename').type('lambdatest.com');
      cy.get(':nth-child(3) > .pr-20 > .w-full').select('CA');
      cy.get('#inputCity').type('Regina');
      cy.get('#inputAddress1').type('2 spence st');
      cy.get('#inputAddress2').type('100');
      cy.get('#inputState').type('Saskatchewan');
      cy.get('#inputZip').type('S4S4H4');
      cy.get('.btn').click();
      //Performance check
      /* cy.lighthouse({
        performance: 60,
        accessibility: 90,
        "best-practices": 80,
        seo: 80
      }); */
      cy.get('.success-msg').should('have.text', 'Thanks for contacting us, we will get back to you shortly.');
      /* ==== End Cypress Studio ==== */
    })
  })  