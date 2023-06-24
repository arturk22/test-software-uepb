describe('Comportamento de alertas em JavaScript', () => {
    it('Deve verificar o funcionamento dos alertas', () => {
      cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

      // Clicar no botão de alerta JS e verificar o texto do alerta
      cy.contains("Click for JS Alert").click();
      cy.on("window:alert", (alertText) => {
        expect(alertText).to.equal("I am a JS Alert");
      });

      // Clicar em "OK" no alerta JS e verificar o texto do resultado
      cy.on("window:confirm", () => {}).then(() => {
        cy.get("#result").should(
          "have.text",
          "You successfully clicked an alert"
        );
      });
      cy.contains("Click for JS Confirm").click();

      // Clicar em "Cancelar" no alerta JS e verificar o texto do resultado
      cy.on("window:confirm", () => {
        cy.get("#result").should("have.text", "You clicked: Cancel");
        return false; // Retorna false para simular o clique no botão "Cancelar"
      });
      cy.contains("Click for JS Confirm").click();

      // Digitar um texto no prompt e verificar o texto do resultado
      cy.window().then((win) => {
        cy.stub(win, "prompt").returns("Test Input");
      });
      cy.contains("Click for JS Prompt").click();
      cy.get("#result").should("have.text", "You entered: Test Input");
    });
  });
  