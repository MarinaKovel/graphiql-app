describe('Error boundry', () => {
  beforeEach(() => {
    cy.visit('/login', {
      onBeforeLoad: (win) => {
        win.localStorage.setItem('lang', 'en');
      },
    });
  });

  it('Going to editor page', () => {
    cy.get('[name="email"]').type('user1@gmail.com');
    cy.get('[name="password"]').type('qqwweerr1!');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/editor');
  });

  it('Check error boundry', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.get('.editor-section__content').find('button').click();
    cy.get('[role="dialog"]').find('h2').should('contain', 'Error');
    cy.get('button').should('contain', 'Reload');
  });
  it('Successful logout', () => {
    cy.get('[aria-label="Account"]').click();
    cy.contains('Logout').click();
    cy.url().should('include', '/');
  });
});
