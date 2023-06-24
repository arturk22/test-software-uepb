describe('Context Menu', () => {
    it('should display "the-internet" context menu option on right-click', () => {
      cy.visit('https://the-internet.herokuapp.com/context_menu');
  
      cy.get('#hot-spot').rightclick();
  
      cy.contains('the-internet').should('exist');
    });
  
    it('should trigger a JavaScript alert when "the-internet" option is clicked', () => {
      cy.visit('https://the-internet.herokuapp.com/context_menu');
  
      cy.get('#hot-spot').rightclick();
  
      cy.contains('the-internet').click();
  
      cy.on('window:alert', (text) => {
        expect(text).to.equal('You selected a context menu');
      });
    });
});
  