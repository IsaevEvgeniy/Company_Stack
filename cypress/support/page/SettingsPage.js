export class SettingsPage {
  getGeneral = () => cy.get('[data-test-id="Общие настройки ПО"]');
  getLawyer = () => cy.get('[data-test-id="Настройки АРМ Юриста"]');
  getReceipts = () => cy.get('[data-test-id="Макеты квитанций"]');

  openGeneral() {
    this.getGeneral().click();
    return this;
  }

  openLawyer() {
    this.getLawyer().click();
    return this;
  }

  openReceipts() {
    this.getReceipts().click();
    return this;
  }
}
