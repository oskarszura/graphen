describe("test dropdown menu", () => {
  it("should open dropdown menu", () => {
    cy.visit("localhost:3000");
    cy.get(".gc-dropdown");
    cy.get(".gc-dropdown__btn").click();
  });
  it("should choose value red", () => {
    cy.get(".gc-dropdown__item")
      .contains("Red")
      .click();
    cy.get(".gc-dropdown__btn").contains("Red");
  });
  it("should reopen and choose value blue", () => {
    cy.get(".gc-dropdown__btn").click();
    cy.get(".gc-dropdown__item")
      .contains("Blue")
      .click();
    cy.get(".gc-dropdown__btn").contains("Blue");
  });
});
