export class HeaderMenu {
  getFastSearchInput = () => cy.get('[data-test-id="fast-ls-search"]');
  getFastReadingsInput = () => cy.get('[data-test-id="fast-readings-input"]');

  getStackButton = () => cy.get('[data-cy="stack-btn"]');
  getMessagesButton = () => cy.get('[data-cy="msg-menu"]');
  getUserMenuButton = () => cy.get('[data-cy="user-menu"]');
  getUserAccount = () => cy.get('[class="v-list-item__title"]');
  clickExit = () => cy.get('button[title="Выход"]');

  openUserProfile() {
    this.getUserMenuButton().click();
    this.getUserAccount().should('be.visible').and('contain.text', 'Сандалова Н.В.');
    return this;
  }

  clickUserMenu() {
    this.getUserMenuButton().click();
    return this;
  }

  clickExet() {
    this.clickExit().click();
    return this;
  }
}
