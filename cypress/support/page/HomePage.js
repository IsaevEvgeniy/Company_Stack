export class HomePage {
  getResidentsAddresses = () => cy.get('[data-test-id="Адреса проживающих"]');
  getInformationCenter = () => cy.get('[data-test-id="Центр информирования"]');
  getOperatorWindow = () => cy.get('[data-test-id="Окно оператора"]');
  getIndividualMetersReadings = () => cy.get('[data-test-id="Ввод показаний ИПУ"]');
  getReports = () => cy.get('[data-test-id="Отчеты"]');
  getPaymentStatements = () => cy.get('[data-test-id="Платежные ведомости"]');
  getCommonMetersReadings = () => cy.get('[data-test-id="Ввод показаний ОДПУ"]');

  openResidentsAddresses() {
    this.getResidentsAddresses().click();
    return this;
  }

  openInformationCenter() {
    this.getInformationCenter().click();
    return this;
  }

  openOperatorWindow() {
    this.getOperatorWindow().click();
    return this;
  }

  openIndividualMetersReadings() {
    this.getIndividualMetersReadings().click();
    return this;
  }

  openReports() {
    this.getReports().click();
    return this;
  }

  openPaymentStatements() {
    this.getPaymentStatements().click();
    return this;
  }

  openCommonMetersReadings() {
    this.getCommonMetersReadings().click();
    return this;
  }
}
