import { URL } from '../url';

export class LoginPage {
  getLoginName = () => cy.get('[data-cy="login"]');
  getLoginPassword = () => cy.get('[data-cy="password"]');
  getLoginButton = () => cy.get('[data-cy="submit-btn"]').contains('Войти');
  getDomainCheckbox = () => cy.get('div[class^="primary--text"]');
  getModalWindow = () => '[data-test-id="stack-yes-no"]';
  getLogo = () => cy.get('.svg-icon.white--text');

  navigate() {
    cy.visit(URL.HOME);
  }

  verifyLogoIsDisplayed = () => {
    return this.getLogo().should('be.visible').and('exist');
  };

  login(username, password) {
    this.getLoginName().type(username);
    this.getLoginPassword().type(password);
    this.getLoginButton().click();
  }

  continueSession(confirm = true) {
    cy.get('body').then(($body) => {
      cy.wait(1500).then(() => {
        const modal = $body.find(this.getModalWindow());

        if (modal.length > 0 && modal.is(':visible')) {
          const button = confirm ? 'btn-yes' : 'btn-no';
          cy.get(`[data-cy="${button}"]`).click();
        }
      });
    });

    return this;
  }
}
