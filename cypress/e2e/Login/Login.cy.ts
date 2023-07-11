/// <reference types="cypress" />
describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    localStorage.clear();
  });
  it("should display the login page", () => {
    cy.get('[data-testid="login-page"]').should("exist");
  });
  it("should display the login form", () => {
    cy.get('[data-testid="login-form"]').should("exist");
  });
  it("should display the login form title", () => {
    cy.get('[data-testid="login-form-title"]').should("exist");
  });
  it("should Login with valid username", () => {
    cy.get('[data-testid="login-form-username"]').type("admin");
    cy.get('[data-testid="login-form-submit"]').click();
    cy.get('[data-testid="login-page"]').should("not.exist");
  });
  it("should not Login with username smaller than 3 chars", () => {
    cy.get('[data-testid="login-form-username"]').type("ad");
    cy.get('[data-testid="login-form-submit"]').click();
    cy.get('[data-testid="login-page"]').should("exist");
  });
  it("should not Login with username larger than 18 chars", () => {
    cy.get('[data-testid="login-form-username"]').type("adminadminadminadmin");
    cy.get('[data-testid="login-form-submit"]').click();
    cy.get('[data-testid="login-page"]').should("exist");
  });
});
