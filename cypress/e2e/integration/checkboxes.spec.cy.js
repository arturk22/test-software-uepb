describe("Manipulação de Checkboxes", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/checkboxes");
  });

  it("Eu quero marcar e desmarcar checkboxes", () => {
    // Verifica se o primeiro checkbox está desmarcado inicialmente
    cy.get('input[type="checkbox"]').first().should("not.be.checked");

    // Verifica se o segundo checkbox está marcado inicialmente
    cy.get('input[type="checkbox"]').eq(1).should("be.checked");

    // Marca o primeiro checkbox
    cy.get('input[type="checkbox"]').first().check();

    // Verifica se o primeiro checkbox foi marcado
    cy.get('input[type="checkbox"]').first().should("be.checked");

    // Desmarca o segundo checkbox
    cy.get('input[type="checkbox"]').eq(1).uncheck();

    // Verifica se o segundo checkbox foi desmarcado
    cy.get('input[type="checkbox"]').eq(1).should("not.be.checked");
  });
});
