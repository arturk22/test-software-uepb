describe('Teste de Imagens Quebradas', () => {
    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/broken_images');
    });
  
    it('Deve exibir as duas imagens quebradas corretamente', () => {
      let brokenImagesCount = 0; // Variável para contar o número de imagens quebradas
  
      cy.get('img').each(($img) => {
        if (brokenImagesCount >= 2) { // Se já encontrou duas imagens quebradas, interrompe o loop
          return false; // Retorna false para interromper o loop
        }
  
        cy.request({
          url: $img.attr('src'),
          failOnStatusCode: false // Ignorar falhas de status (como erro 404)
        }).then((response) => {
          if (response.status === 404) {
            cy.wrap($img).should('be.visible');
            brokenImagesCount++; // Incrementa o contador de imagens quebradas
          } else {
            expect(response.status).to.equal(200);
            cy.wrap($img[0].naturalWidth).should('be.greaterThan', 0);
          }
        });
      });
    });
  });
  