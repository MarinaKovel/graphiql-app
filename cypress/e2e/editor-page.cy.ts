describe('Editor page', () => {
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

  it('Check editor section', () => {
    cy.get('.editor-section').find('.editor-section__content').find('.cm-theme-light');
  });

  it('Check response section', () => {
    cy.get('.response').find('h6').should('contain', 'rickandmortyapi');
  });

  it('Test documentation', () => {
    cy.get('.MuiDrawer-paper').should('have.css', 'visibility', 'hidden');
    cy.get('[aria-label="open drawer"]').click();
    cy.get('.MuiDrawer-paper').should('have.css', 'transform', 'none');
    cy.get('p').should('have.class', 'title').should('contain', 'Docs');
    cy.get('span').should('have.class', 'subtitle__text').should('contain', 'Root Types');
    cy.get('button[name="showFields"]').should('contain', 'Query').click();
    cy.get('span').should('have.class', 'args');
    cy.get('span').should('have.class', 'type-text');
    cy.get('div .drawer').click();
  });

  it('Successful logout', () => {
    cy.get('[aria-label="Account"]').click();
    cy.contains('Logout').click();
    cy.url().should('include', '/');
  });
});
