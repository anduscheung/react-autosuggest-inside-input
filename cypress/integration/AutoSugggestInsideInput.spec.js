/// <reference types="cypress" />

describe("My First Test", () => {
  it('finds the content "type"', () => {
    cy.visit("localhost:3000");
    cy.get("#asi-input").type("w");
    cy.get("#asi-input").should("have.value", "www.google.com");

    cy.get("#asi-input").type("{rightArrow}");
    cy.get("#asi-input").type("{backspace}");
    cy.get("#asi-input").should("have.value", "www.google.co");
  });
});
