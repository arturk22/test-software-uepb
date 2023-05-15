describe('Login', () => {
    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/login');
    });
  
    it('should show error message on invalid login attempt', () => {
      cy.get('#username').type('usuario-invalido');
      cy.get('#password').type('senha-invalida');
      cy.get('button[type="submit"]').click();
  
      cy.get('.flash.error').should('contain', 'Your username is invalid!');
      cy.url().should('eq', 'https://the-internet.herokuapp.com/login')
    });
  });
  