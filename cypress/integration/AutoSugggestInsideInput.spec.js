/// <reference types="cypress" />

describe("Test AutoSuggestInsideInput component", () => {
  it("search with one chars", () => {
    cy.visit("localhost:3000");
    cy.get("#asi-input").type("w");
    cy.get("#asi-input").should("have.value", "www.google.com");
  });

  it("search with multiple chars", () => {
    cy.visit("localhost:3000");
    cy.get("#asi-input").type("w").type("w").type("w");
    cy.get("#asi-input").should("have.value", "www.google.com");
  });

  it("search with multiple chars and change suggestion", () => {
    cy.visit("localhost:3000");
    cy.get("#asi-input").type("w").type("w").type("w").type(".").type("n");
    cy.get("#asi-input").should("have.value", "www.npmjs.com");
  });

  it("search and delete from right side", () => {
    cy.visit("localhost:3000");
    cy.get("#asi-input").type("w").type("{rightArrow}").type("{backspace}");
    cy.get("#asi-input").should("have.value", "www.google.co");

    cy.get("#asi-input")
      .type("{leftArrow}")
      .type("{leftArrow}")
      .type("{backspace}");
    cy.get("#asi-input").should("have.value", "www.googleco");
  });

  it("search and delete from left side", () => {
    cy.visit("localhost:3000");
    cy.get("#asi-input").type("w").type("{leftArrow}").type("{del}");
    cy.get("#asi-input").should("have.value", "ww.google.com");
  });
});
