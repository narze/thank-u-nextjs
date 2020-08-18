import { before } from "cypress/types/lodash";

describe('homepage', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it('renders heading', () => {
    cy.findByText(/Welcome to/i).should('exist')
    cy.findByRole("link", { name: "Next.js!" }).should('exist')
    cy.findByRole("button", { name: "Test Button" }).should('exist')
    cy.findByRole("button", { name: "@emotion/css" }).click()
    cy.findByRole("button", { name: "@emotion/react" }).click()
    cy.findByRole("button", { name: "@emotion/styled" }).click()
  });
});
