export class CloseMonthPage {
  getClose = () => cy.get('[data-test-id="Закрытие или блокировка месяца"]');
  getMassPrint = () => cy.get('[data-test-id="Массовая печать квитанций"]');
  getOpen = () => cy.get('[data-test-id="Открытие или разблокировка месяца"]');
  getRegistrySettings = () => cy.get('[data-test-id="Настройка реестра закрытия месяца"]');

  openClose() {
    this.getClose().click();
    return this;
  }

  openMassPrint() {
    this.getMassPrint().click();
    return this;
  }

  openOpen() {
    this.getOpen().click();
    return this;
  }

  openRegistrySettings() {
    this.getRegistrySettings().click();
    return this;
  }
}
