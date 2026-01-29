export class LeftMenu {
  getHome = () => cy.get('a[href="/fl/"]');
  getAddressFund = () => cy.get('a[href="/fl/accounts/acc_menu"]');
  getPayments = () => cy.get('a[href="/fl/payments"]');
  getMeteringDevices = () => cy.get('a[href="/fl/metersdata"]');
  getDocuments = () => cy.get('a[href="/fl/documents"]');
  getReports = () => cy.get('a[href="/fl/reports"]');
  getOperations = () => cy.get('a[href="/fl/operations"]');
  getStackIntegration = () => cy.get('a[href="/fl/gis"]');
  getInformationCenter = () => cy.get('a[href="/fl/infocenter"]');
  getReferenceBooks = () => cy.get('a[href="/fl/references"]');
  getClosingThePeriod = () => cy.get('a[href="/fl/closemonth"]');
  getSettings = () => cy.get('a[href="/fl/settings"]');

  openHome() {
    this.getHome().click();
  }

  openAddressFund() {
    this.getAddressFund().click();
  }

  openPayments() {
    this.getPayments().click();
  }

  openMeteringDevices() {
    this.getMeteringDevices().click();
  }

  openDocuments() {
    this.getDocuments().click();
  }

  openReports() {
    this.getReports().click();
  }

  openOperations() {
    this.getOperations().click();
  }

  openStackIntegration() {
    this.getStackIntegration().click();
  }

  openInformationCenter() {
    this.getInformationCenter().click();
  }

  openReferenceBooks() {
    this.getReferenceBooks().click();
  }

  openClosingThePeriod() {
    this.getClosingThePeriod().click();
  }

  openSettings() {
    this.getSettings().click();
  }
}
