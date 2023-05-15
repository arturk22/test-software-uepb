describe("Manipulação de Dropdowns", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/dropdown");
  });

  it("Eu quero selecionar opções de um dropdown", () => {
    // Verifica se o dropdown possui a opção padrão selecionada
    cy.get("#dropdown option:selected").should(
      "have.text",
      "Please select an option"
    );

    // Seleciona a opção 'Option 1' no dropdown
    cy.get("#dropdown").select("Option 1");

    // Verifica se a opção 'Option 1' foi selecionada corretamente
    cy.get("#dropdown option:selected").should("have.text", "Option 1");

    // Seleciona a opção 'Option 2' no dropdown
    cy.get("#dropdown").select("Option 2");

    // Verifica se a opção 'Option 2' foi selecionada corretamente
    cy.get("#dropdown option:selected").should("have.text", "Option 2");
  });
});
