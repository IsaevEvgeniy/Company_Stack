export class ReferencesPage {
  getServices = () => cy.get('[data-test-id="Услуги"]');
  getParamTypes = () => cy.get('[data-test-id="Виды параметров"]');
  getRates = () => cy.get('[data-test-id="Реестр ставок"]');
  getAddresses = () => cy.get('[data-test-id="Адресная система"]');
  getBenefitCats = () => cy.get('[data-test-id="Категории льгот"]');
  getServiceCats = () => cy.get('[data-test-id="Категории услуг"]');
  getConstants = () => cy.get('[data-test-id="Константы"]');
  getBenefits = () => cy.get('[data-test-id="Льготы"]');
  getObjectParams = () => cy.get('[data-test-id="Виды параметров объектов"]');

  openServices() {
    this.getServices().click();
    return this;
  }

  openParamTypes() {
    this.getParamTypes().click();
    return this;
  }

  openRates() {
    this.getRates().click();
    return this;
  }

  openAddresses() {
    this.getAddresses().click();
    return this;
  }

  openBenefitCats() {
    this.getBenefitCats().click();
    return this;
  }

  openServiceCats() {
    this.getServiceCats().click();
    return this;
  }

  openConstants() {
    this.getConstants().click();
    return this;
  }

  openBenefits() {
    this.getBenefits().click();
    return this;
  }

  openObjectParams() {
    this.getObjectParams().click();
    return this;
  }
}
