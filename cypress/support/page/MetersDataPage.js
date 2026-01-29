export class MetersDataPage {
  getIPUStatements = () => cy.get('[data-test-id="Ведомости показаний по ИПУ"]');
  getODPUMassDivision = () => cy.get('[data-test-id="Массовое деление ОДПУ"]');
  getMassIPUInput = () => cy.get('[data-test-id="Массовый ввод индивидуальных показаний"]');
  getExternalStatements = () => cy.get('[data-test-id="Ведомостисторонних показаний"]');
  getExternalRegistry = () =>
    cy.get('[data-test-id="Формирование реестра для приема сторонних показаний"]');
  getCommonMeters = () => cy.get('[data-test-id="Общедомовые и общеквартирные приборы учёта"]');
  getMassODPUInput = () => cy.get('[data-test-id="Массовый ввод показаний по ОДПУ/ОКПУ"]');
  getExternalFile = () => cy.get('[data-test-id="Прием сторонних показаний из файла"]');

  openIPUStatements() {
    this.getIPUStatements().click();
    return this;
  }

  openODPUMassDivision() {
    this.getODPUMassDivision().click();
    return this;
  }

  openMassIPUInput() {
    this.getMassIPUInput().click();
    return this;
  }

  openExternalStatements() {
    this.getExternalStatements().click();
    return this;
  }

  openExternalRegistry() {
    this.getExternalRegistry().click();
    return this;
  }

  openCommonMeters() {
    this.getCommonMeters().click();
    return this;
  }

  openMassODPUInput() {
    this.getMassODPUInput().click();
    return this;
  }

  openExternalFile() {
    this.getExternalFile().click();
    return this;
  }
}
