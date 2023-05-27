describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad: (win) => {
        win.localStorage.setItem('lang', 'en');
      },
    });
  });

  it('displays the about app section correctly', () => {
    cy.get('.about-app__title').should('contain', 'A query language for your API');
    cy.get('.about-app__info').should(
      'contain',
      'GraphiQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphiQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.'
    );
    cy.get('.about-app__logo img').should('be.visible');
  });

  it('displays the developer cards section correctly', () => {
    cy.get('.MuiGrid-container .developer-card').should('have.length', 3);
  });

  it('displays the about course section correctly', () => {
    cy.get('.about-course__title').should('contain', 'About the course');
    cy.get('.about-course__info').should(
      'contain',
      "RS School is free-of-charge and community-based education program conducted by The Rolling Scopes developer community since 2013. Everyone can study at RS School, regardless of age, professional employment, or place of residence. The mentors and trainers of our school are front-end and javascript developers from different companies and countries. RS School operates 'Pay it forward' principle. We share our knowledge with students for free at the present time, hoping that in the future they will return to us as mentors and pass on their knowledge to the next generation of students in the same way."
    );
  });
});
