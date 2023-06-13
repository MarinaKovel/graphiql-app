describe('Burger menu', () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad: (win) => {
        win.localStorage.setItem('lang', 'en');
        win.localStorage.setItem('theme', 'light');
      },
    });
  });

  it('Check burger menu', () => {
    cy.viewport(768, 1200);
    cy.get('.header__close-img').click();
    cy.get('.header')
      .find('.modal-mobile')
      .find('.modal-mobile__links')
      .find('.modal-mobile__toggles');
  });

  it('Change theme in burger menu', () => {
    cy.viewport(768, 1200);
    cy.window().its('localStorage.theme').should('eq', 'light');
    cy.get('.header__close-img').click();
    cy.get('.header')
      .find('.modal-mobile')
      .find('.modal-mobile__links')
      .find('.header__toggle')
      .click();
    cy.window().its('localStorage').invoke('setItem', 'theme', 'dark');
    cy.window().its('localStorage.theme').should('eq', 'dark');
  });

  it('Change language in burger menu', () => {
    cy.viewport(768, 1200);
    cy.window().its('localStorage.lang').should('eq', 'en');
    cy.get('.header__close-img').click();
    cy.get('.header')
      .find('.modal-mobile')
      .find('.modal-mobile__toggles')
      .find('.header__language')
      .click();
    cy.window().its('localStorage').invoke('setItem', 'lang', 'ru');
    cy.window().its('localStorage.lang').should('eq', 'ru');
  });
});
