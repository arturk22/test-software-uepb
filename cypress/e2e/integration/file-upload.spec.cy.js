describe('Upload de Arquivos', () => {
    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/upload');
    });
  
    it('deve fazer upload de um arquivo', () => {
      const fileName = 'exemplo.txt';
  
      cy.fixture('exemplo.txt').then(fileContent => {
        cy.get('#file-upload').attachFile({
          fileContent,
          fileName,
          mimeType: 'text/plain'
        });
  
        cy.get('#file-submit').click();
  
        cy.get('.example > h3').should('contain', 'File Uploaded!');
        cy.get('#uploaded-files').should('contain', fileName);
      });
    });
  });
  