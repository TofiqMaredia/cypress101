describe('Test Scenario', () => {

    before(() => {
      cy.visit('/selenium-playground');
    });
  
    it('Test Scenario 1', () => {
      cy.wait(5000).contains('Drag & Drop Sliders').click();
      cy.get('.sp__range-success > .sp__range').as('range')
        .invoke('val', 95)
        .trigger('change')
        .click({
          force: true
        });
      cy.get('#rangeSuccess').should('have.value', 95);
      cy.screenshot();
    })
  })