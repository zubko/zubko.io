/// <reference types="Cypress" />
describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.injectAxe();
    cy.configureAxe({});
  });
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y();
  });
});
