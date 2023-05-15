describe("Autenticação Básica", () => {
  it("Eu quero acessar uma área restrita com autenticação básica", () => {
    // Acessa a página com autenticação básica
    cy.visit("https://the-internet.herokuapp.com/basic_auth", {
      auth: {
        username: "admin",
        password: "admin",
      },
    });

    // Verifica se a autenticação foi bem-sucedida
    cy.contains(
      "Congratulations! You must have the proper credentials."
    ).should("be.visible");
  });
});
