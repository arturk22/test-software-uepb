describe('Comportamento de erros em JavaScript', () => {
    it('Deve exibir uma mensagem de erro', () => {
      cy.on('uncaught:exception', (err) => {
        expect(err.message).to.include("Cannot read properties of undefined");
        return false;
      });
  
      cy.visit('https://the-internet.herokuapp.com/javascript_error');
    });
  });
  