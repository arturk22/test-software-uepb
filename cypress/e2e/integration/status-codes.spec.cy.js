describe('Teste de Códigos de Status', () => {
    it('Deve verificar os códigos de status', () => {
      // Acessa a página inicial
      cy.visit('https://the-internet.herokuapp.com/status_codes');
  
      // Clica no link do código de status 200
      cy.contains('200').click();
  
      // Verifica se o código de status é exibido corretamente
      cy.contains('200');
  
      // Volta para a página anterior
      cy.go('back');
  
      // Clica no link do código de status 301
      cy.contains('301').click();
  
      // Verifica se o código de status é exibido corretamente
      cy.contains('301');
  
      // Volta para a página anterior
      cy.go('back');
  
      // Clica no link do código de status 404
      cy.contains('404').click();
  
      // Verifica se o código de status é exibido corretamente
      cy.contains('404');
  
      // Volta para a página anterior
      cy.go('back');
  
      // Clica no link do código de status 500
      cy.contains('500').click();
  
      // Verifica se o código de status é exibido corretamente
      cy.contains('500');
    });
  });
  