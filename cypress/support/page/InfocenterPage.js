export class InfocenterPage {
  getCampaigns = () => cy.get('[data-test-id="Реестр кампаний"]');
  getMedia = () => cy.get('[data-test-id="Медиафайлы центра информирования"]');
  getParameters = () => cy.get('[data-test-id="Параметры шаблона центра информирования"]');
  getWizard = () => cy.get('[data-test-id="Мастер создания кампаний"]');
  getTemplates = () => cy.get('[data-test-id="Шаблоны центра информирования"]');
  getTransport = () => cy.get('[data-test-id="Транспорт центра информирования"]');

  openCampaigns() {
    this.getCampaigns().click();
    return this;
  }

  openMedia() {
    this.getMedia().click();
    return this;
  }

  openParameters() {
    this.getParameters().click();
    return this;
  }

  openWizard() {
    this.getWizard().click();
    return this;
  }

  openTemplates() {
    this.getTemplates().click();
    return this;
  }

  openTransport() {
    this.getTransport().click();
    return this;
  }
}
