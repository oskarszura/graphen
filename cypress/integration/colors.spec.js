describe('Alerts', () => {
  it('should render successfully', () => {
    cy.visit('localhost:3000');
    cy.get('.tst-colors').screenshot();
  });
});

