describe('Teste de Redirecionamento de Página', () => {
    it('Deve redirecionar para a página correta', () => {
      // Acessa a página inicial
      cy.visit('https://the-internet.herokuapp.com/redirector');
  
      // Clica no link que realiza o redirecionamento
      cy.get('a#redirect').click();
  
      // Espera o redirecionamento ocorrer e verifica a nova URL
      cy.url().should('include', '/status_codes');
    });
  });
  