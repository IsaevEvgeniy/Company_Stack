export class AddressFundPage {
  getAddresses = () => cy.get('[data-test-id="Адреса проживающих"]');
  getUKRegistries = () => cy.get('[data-test-id="Реестры по УК"]');
  getOperator = () => cy.get('[data-test-id="Окно оператора"]');
  getQuickFund = () => cy.get('[data-test-id="Быстрый ввод фонда"]');
  getDivisionWizard = () => cy.get('[data-test-id="Мастер деления лицевого"]');
  getAccountRegistries = () => cy.get('[data-test-id="Реестры лицевых"]');
  getAccountFilters = () => cy.get('[data-test-id="Фильтры лицевых"]');
  getQuickIPU = () => cy.get('[data-test-id="Быстрый ввод индивидуальных приборов учёта"]');
  getMassInput = () => cy.get('[data-test-id="Массовый ввод характеристик"]');

  getAddButton = () => cy.get('[data-cy="btn-add"]');
  getDistrict = () => cy.contains('[data-cy="stack-menu-list-item"]', 'Район');
  getLinearSection = () => cy.contains('[data-cy="stack-menu-list-item"]', 'Линейный участок');
  getMunicipalDistrict = () =>
    cy.contains('[data-cy="stack-menu-list-item"]', 'Муниципальный район');
  getCity = () => cy.contains('[data-cy="stack-menu-list-item"]', 'Город');
  getSettlement = () => cy.contains('[data-cy="stack-menu-list-item"]', 'Населенный пункт');
  getStreet = () => cy.contains('[data-cy="stack-menu-list-item"]', 'Улица');
  getHouse = () => cy.contains('[data-cy="stack-menu-list-item"]', 'Дом');
  getPremises = () => cy.contains('[data-cy="stack-menu-list-item"]', 'Помещение');
  getPersonalAccount = () => cy.contains('[data-cy="stack-menu-list-item"]', 'Лицевой счет');

  getNameDistrict = () => cy.get('[data-test-id="Название района"]');
  getButtonEnter = () => cy.get('[data-cy="btn-save"]');
  getButtonСancellation = () => cy.get('[data-cy="btn-cancel"]');

  getDistrictSelector = () => 'td[data-field="название"] .align-center';
  getEditButtonSelector = () => 'button[data-cy="btn-edit"]';

  getCheckbox = () => 'input[type="checkbox"]';
  getButtonDelete = () => cy.get('[data-cy="btn-delete"]');

  openAddresses() {
    this.getAddresses().click();
    return this;
  }

  openUKRegistries() {
    this.getUKRegistries().click();
    return this;
  }

  openOperator() {
    this.getOperator().click();
    return this;
  }

  openQuickFund() {
    this.getQuickFund().click();
    return this;
  }

  openDivisionWizard() {
    this.getDivisionWizard().click();
    return this;
  }

  openAccountRegistries() {
    this.getAccountRegistries().click();
    return this;
  }

  openAccountFilters() {
    this.getAccountFilters().click();
    return this;
  }

  openQuickIPU() {
    this.getQuickIPU().click();
    return this;
  }

  openMassInput() {
    this.getMassInput().click();
    return this;
  }

  clickAddButton() {
    this.getAddButton().click();
    return this;
  }

  openDistrict() {
    return this.getDistrict().click();
  }

  openLinearSection() {
    return this.getLinearSection().click();
  }

  openMunicipalDistrict() {
    return this.getMunicipalDistrict().click();
  }

  openCity() {
    return this.getCity().click();
  }

  openSettlement() {
    return this.getSettlement().click();
  }

  openHouse() {
    return this.getHouse().click();
  }

  openPremises() {
    return this.getPremises().click();
  }

  openPersonalAccount() {
    return this.getPersonalAccount().click();
  }

  creationDistrict(name) {
    this.getNameDistrict().type(name);
    this.getButtonEnter().click();
    cy.contains(name).should('be.visible');
    return this;
  }

  findDistrictByName = (name) => {
    return cy.contains(this.getDistrictSelector(), name);
  };

  getDistrictRow = (name) => {
    return this.findDistrictByName(name).parents('tr').first();
  };

  openDistrictEdit = (name) => {
    this.getDistrictRow(name).find(this.getEditButtonSelector()).click();
    return this;
  };

  changeDistrictName = (oldName, newName) => {
    this.openDistrictEdit(oldName);
    this.getNameDistrict().clear().type(newName);
    cy.get('body').click(0, 0);
    this.getButtonEnter().click();
    cy.contains(newName).should('be.visible');
    return this;
  };

  checkDistrictCheckbox = (name) => {
    this.getDistrictRow(name).find(this.getCheckbox()).check({ force: true });
    return this;
  };

  deleteDistrictByName = (name, confirm = true) => {
    this.findDistrictByName(name);
    this.checkDistrictCheckbox(name);
    this.getButtonDelete().click();
    cy.wait(1000);
    const buttonSelector = confirm ? '[data-cy="btn-yes"]' : '[data-cy="btn-no"]';
    cy.get(buttonSelector).click();
    cy.contains(name).should('not.exist');
    return this;
  };
}
