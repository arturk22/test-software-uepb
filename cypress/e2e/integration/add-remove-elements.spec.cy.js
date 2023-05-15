describe('Add/Remove Elements', () => {
    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/add_remove_elements/');
    });
  
    it('Eu quero adicionar e remover elementos', () => {
      // Verifica se não há elementos na lista inicialmente
      cy.get('.added-manually').should('not.exist');
  
      // Clica no botão "Add Element" para adicionar um elemento
      cy.contains('Add Element').click();
  
      // Verifica se o elemento foi adicionado
      cy.get('.added-manually').should('have.length', 1);
  
      // Clica no botão "Delete" para remover o elemento
      cy.get('#elements').within(() => {
        cy.contains('Delete').click();
      });
  
      // Verifica se o elemento foi removido
      cy.get('.added-manually').should('have.length', 0);
    });
  });
  