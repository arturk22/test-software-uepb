describe("Login", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/login");
  });

  it("should login successfully", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get('button[type="submit"]').click();

    cy.url().should("eq", "https://the-internet.herokuapp.com/secure");
    cy.get(".flash.success").should("contain", "You logged into a secure area!");
  });
});
