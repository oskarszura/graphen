describe('Colors', () => {
  before(() => {
    cy.visit('localhost:3000');
  });

  it('should make a screenshot', () => {
    cy.get('.tst-colors').screenshot();
  });

  describe('color brand primary', () => {
    it('should have proper styles', () => {
      cy.get('.tst-colors-primary')
        .should('have.class', 'c-sample')
        .should('have.class', 'c-sample c-sample--brand-primar');
    });
  });

  describe('color brand text', () => {
    it('should have proper styles', () => {
      cy.get('.tst-colors-text')
        .should('have.class', 'c-sample')
        .should('have.class', 'c-sample c-sample--brand-text');
    });
  });

  describe('color brand link', () => {
    it('should have proper styles', () => {
      cy.get('.tst-colors-link')
        .should('have.class', 'c-sample')
        .should('have.class', 'c-sample c-sample--brand-link');
    });
  });

  describe('color brand component', () => {
    it('should have proper styles', () => {
      cy.get('.tst-colors-component')
        .should('have.class', 'c-sample')
        .should('have.class', 'c-sample c-sample--brand-component');
    });
  });
});

