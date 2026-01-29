export class ReportsPage {
  getFavorites = () => cy.contains('.v-list-item__title', 'Избранные');
  getMain = () => cy.contains('.v-list-item__title', 'Основные');
  getAdditional = () => cy.contains('.v-list-item__title', 'Дополнительные');
  getIndividual = () => cy.contains('.v-list-item__title', 'Индивидуальные');
  getService = () => cy.contains('.v-list-item__title', 'Служебные');

  openFavorites() {
    this.getFavorites().click();
    return this;
  }

  openMain() {
    this.getMain().click();
    return this;
  }

  openAdditional() {
    this.getAdditional().click();
    return this;
  }

  openIndividual() {
    this.getIndividual().click();
    return this;
  }

  openService() {
    this.getService().click();
    return this;
  }
}
