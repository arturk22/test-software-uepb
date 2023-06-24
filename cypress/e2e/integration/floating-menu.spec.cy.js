describe('Verificação do comportamento do menu flutuante', () => {
  it('Deve verificar se o menu flutuante é exibido corretamente e permanece no topo da página ao rolar', () => {
    cy.visit('https://the-internet.herokuapp.com/floating_menu');

    // Verifica se o menu flutuante está visível inicialmente
    cy.get('#menu').should('be.visible');

    // Obtém a posição inicial do menu flutuante
    let initialPosition;
    cy.get('#menu').invoke('offset').then((offset) => {
      initialPosition = offset.top;
    });

    // Role a página para baixo usando o scrollBy
    cy.window().then((win) => {
      win.scrollBy(0, 500);
    });

    // Verifica se o menu flutuante permanece no topo da página após rolar
    cy.get('#menu').invoke('offset').then((offset) => {
      expect(offset.top).to.be.closeTo(initialPosition, 1); // Aceita uma pequena diferença de posição
    });
  });
});
