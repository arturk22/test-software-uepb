import 'cypress-real-events/support';

describe('Hovers', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/hovers');
  });

  it('Eu quero interagir com elementos que exibem informações ao passar o mouse', () => {
    // Verifica se as informações estão ocultas inicialmente
    cy.get('.figure .figcaption').should('not.be.visible');

    // Passa o mouse sobre a primeira imagem para exibir as informações
    cy.get('.figure').first().realHover();

    // Verifica se as informações são exibidas corretamente
    cy.get('.figure .figcaption').first().should('be.visible').contains('name: user1');

    // Passa o mouse para fora da primeira imagem
    cy.get('body').realHover();

    // Verifica se as informações são ocultadas novamente
    cy.get('.figure .figcaption').first().should('not.be.visible');
  });
});
