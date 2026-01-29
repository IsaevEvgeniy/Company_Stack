export class PaymentsPage {
  getPaymentStatements = () => cy.get('[data-test-id="Платежные ведомости"]');
  getBankStatements = () => cy.get('[data-test-id="Выписки из банка"]');
  getPaymentsFromFile = () => cy.get('[data-test-id="Прием платежей из файла"]');
  getDailyPaymentDistribution = () => cy.get('[data-test-id="Ежедневное распределение оплаты"]');
  getPaymentDistribution = () => cy.get('[data-test-id="Распределение оплаты"]');
  getPaymentRegistriesJournal = () => cy.get('[data-test-id="Журнал реестров платежей"]');

  openPaymentStatements() {
    this.getPaymentStatements().click();
    return this;
  }

  openBankStatements() {
    this.getBankStatements().click();
    return this;
  }

  openPaymentsFromFile() {
    this.getPaymentsFromFile().click();
    return this;
  }

  openDailyPaymentDistribution() {
    this.getDailyPaymentDistribution().click();
    return this;
  }

  openPaymentDistribution() {
    this.getPaymentDistribution().click();
    return this;
  }

  openPaymentRegistriesJournal() {
    this.getPaymentRegistriesJournal().click();
    return this;
  }
}
