// cypress/integration/mywebsite.spec.js

describe('My Website E2E Tests', () => {
  beforeEach(() => {
    // Visit the website before each test
    cy.visit('https://kiripost-web-dev-3xhko3k52a-as.a.run.app/');
  });

  it('should load the homepage', () => {
    // Check if the title is correct
    cy.title().should('eq', 'Business & Technology News Stories from Cambodia, Asia');

    // Example: Check if a specific element is visible
    // cy.get('h1').should('be.visible');

    // You can add more assertions based on your website structure
    // For example:
    // cy.get('.your-class-name').should('have.length', 3);
  });

  it('should navigate to another page', () => {
    // Example: Click on a link to navigate to another page
    cy.get('a[href="/topics/business"]').click();
    cy.get('a[href="/topics/technology"]').click();
    cy.get('a[href="/topics/lifestyle"]').click();
    cy.get('a[href="/topics/education"]').click();

    // Check if the new page has loaded successfully
    // cy.url().should('include', '/another-page');
    // cy.title().should('eq', 'Another Page Title');
  });

  it('should check if element with id "section-telegram", section-whatsapp, section-newsletter exists', () => {
    cy.get('#section-telegram').should('exist');
    cy.get('#section-whatsapp').should('exist');
    cy.get('#section-newsletter').should('exist');
    cy.get('div').should('have.class', 'mui-1nbrgf1');
  });
});
