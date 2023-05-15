describe('Teste de arrastar e soltar', () => {
  it('Arrasta e solta os elementos corretamente', () => {
    const dataTransfer = new DataTransfer();

    cy.visit('https://the-internet.herokuapp.com/drag_and_drop')

    // Seleciona os elementos de origem e destino
    cy.get('#column-a').as('elementoA')
    cy.get('#column-b').as('elementoB')

    // Verifica a posição inicial dos elementos
    cy.get('@elementoA').should('contain', 'A')
    cy.get('@elementoB').should('contain', 'B')

    // Executa o arrastar e soltar
    cy.get('@elementoA').trigger('dragstart', {
        dataTransfer
    });
    cy.get('@elementoB').trigger('drop', {
        dataTransfer
    });
    // Verifica a posição dos elementos após o arrastar e soltar
    cy.get('@elementoA').should('contain', 'B')
    cy.get('@elementoB').should('contain', 'A')
  })
})
