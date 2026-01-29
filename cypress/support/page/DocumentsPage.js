export class DocumentsPage {
  getQualityActs = () => cy.get('[data-test-id="Акты снятия качества"]');
  getBalanceCorrection = () => cy.get('[data-test-id="Ведомости коррекции сальдо"]');
  getInstallment = () => cy.get('[data-test-id="Соглашения о рассрочке"]');
  getOffBalanceRestore = () => cy.get('[data-test-id="Ведомости восстановления из забаланса"]');
  getViolationActs = () => cy.get('[data-test-id="Акты нарушений абонентов"]');
  getOneTimeAccrual = () => cy.get('[data-test-id="Ведомости разовых начислений"]');
  getChecks = () => cy.get('[data-test-id="Реестр чеков"]');
  getOffBalance = () => cy.get('[data-test-id="Ведомости забалансового сальдо"]');
  getBankruptcy = () => cy.get('[data-test-id="Ведомости банкротства"]');
  getDebtors = () => cy.get('[data-test-id="Акты по должникам"]');

  openQualityActs() {
    this.getQualityActs().click();
    return this;
  }

  openBalanceCorrection() {
    this.getBalanceCorrection().click();
    return this;
  }

  openInstallment() {
    this.getInstallment().click();
    return this;
  }

  openOffBalanceRestore() {
    this.getOffBalanceRestore().click();
    return this;
  }

  openViolationActs() {
    this.getViolationActs().click();
    return this;
  }

  openOneTimeAccrual() {
    this.getOneTimeAccrual().click();
    return this;
  }

  openChecks() {
    this.getChecks().click();
    return this;
  }

  openOffBalance() {
    this.getOffBalance().click();
    return this;
  }

  openBankruptcy() {
    this.getBankruptcy().click();
    return this;
  }

  openDebtors() {
    this.getDebtors().click();
    return this;
  }
}
