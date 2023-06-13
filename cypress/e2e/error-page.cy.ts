import { RoutePath } from '@/utils/enum';

describe('404 Page', () => {
  beforeEach(() => {
    cy.visit('/404', {
      onBeforeLoad: (win) => {
        win.localStorage.setItem('lang', 'en');
      },
    });
  });

  it('displays the error page correctly for the selected language', () => {
    cy.get('h3').should('contain', `Page not found`);
    cy.get('.error-page__title').should('contain', ` 404 Error `);
    cy.get('.error-page__text').should('contain', ' Sorry, this page isn`t available ');
  });

  it('redirects to home page when clicking the home button', () => {
    cy.get('button a').click();
    cy.url().should('include', RoutePath.HOME);
  });
});
