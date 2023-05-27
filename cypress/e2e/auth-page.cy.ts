describe('Login', () => {
  beforeEach(() => {
    cy.visit('/login', {
      onBeforeLoad: (win) => {
        win.localStorage.setItem('lang', 'en');
      },
    });
  });

  it('Checks the page title', () => {
    cy.get('.auth__title').should('contain', 'Log in to your Account');
  });

  it('Switches to the registration page', () => {
    cy.contains('Sign Up').click();
    cy.url().should('include', '/sign-up');
  });

  it('Switches to the login page', () => {
    cy.contains('Sign In').click();
    cy.url().should('include', '/login');
  });

  it('Automatically redirects after successful authentication', () => {
    cy.get('[name="email"]').type('user1@gmail.com');
    cy.get('[name="password"]').type('qqwweerr1!');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/editor');
  });

  it('Successful logout', () => {
    cy.get('[aria-label="Account"]').click();
    cy.contains('Logout').click();
    cy.url().should('include', '/');
  });

  it('Error after unsuccessful authentication', () => {
    cy.get('[name="email"]').type('random.email@.com');
    cy.get('[name="password"]').type('where_enums');
    cy.get('button[type="submit"]').click();
    cy.contains('Email is invalid');
    cy.contains('Password must contain at least one digit');
  });

  it('Another error after unsuccessful authentication', () => {
    cy.get('[name="email"]').type('random.email@.com');
    cy.get('[name="password"]').type('enum123');
    cy.get('button[type="submit"]').click();
    cy.contains('Email is invalid');
    cy.contains('Password must be more than 8 characters');
  });

  it('User not found', () => {
    cy.get('[name="email"]').type('user2@gmail.com');
    cy.get('[name="password"]').type('loveenum12$');
    cy.get('button[type="submit"]').click();
    cy.get('.css-av7lmi').should('be.visible');
    cy.get('[id="modal-modal-title"]').should('contain', 'Check your email address or password');
  });

  it('Wrong password', () => {
    cy.get('[name="email"]').type('user1@gmail.com');
    cy.get('[name="password"]').type('loveenum12$');
    cy.get('button[type="submit"]').click();
    cy.get('.css-av7lmi').should('be.visible');
    cy.get('[id="modal-modal-title"]').should('contain', 'Check your email address or password');
  });

  it('Failed registration because email or password is bad', () => {
    cy.contains('Sign Up').click();
    cy.url().should('include', '/sign-up');
    cy.get('[name="email"]').type('random.email@.com');
    cy.get('[name="password"]').type('where_enums');
    cy.get('button[type="submit"]').click();
    cy.contains('Email is invalid');
    cy.contains('Password must contain at least one digit');
  });

  it('Failed registration because password too short', () => {
    cy.contains('Sign Up').click();
    cy.url().should('include', '/sign-up');
    cy.get('[name="email"]').type('random.email@.com');
    cy.get('[name="password"]').type('enum123');
    cy.get('button[type="submit"]').click();
    cy.contains('Email is invalid');
    cy.contains('Password must be more than 8 characters');
  });

  it('Failed registration because password must contain at least one special character', () => {
    cy.contains('Sign Up').click();
    cy.url().should('include', '/sign-up');
    cy.get('[name="email"]').type('random.email@.com');
    cy.get('[name="password"]').type('loveenums123');
    cy.get('button[type="submit"]').click();
    cy.contains('Email is invalid');
    cy.contains('Password must contain at least one special character');
  });

  it('Failed registration because email password is required', () => {
    cy.contains('Sign Up').click();
    cy.url().should('include', '/sign-up');
    cy.get('button[type="submit"]').click();
    cy.contains('Email is required');
    cy.contains('Password is required');
  });

  it('Failed registration because email already used', () => {
    cy.contains('Sign Up').click();
    cy.url().should('include', '/sign-up');
    cy.get('[name="email"]').type('user1@gmail.com');
    cy.get('[name="password"]').type('qqwweerr1!');
    cy.get('button[type="submit"]').click();
    cy.get('.css-av7lmi').should('be.visible');
    cy.get('[id="modal-modal-title"]').should('contain', 'Email already in use');
  });
});
