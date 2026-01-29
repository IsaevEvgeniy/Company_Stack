export class GisPage {
  getMasterExport = () => cy.get('[data-test-id="Мастер экспорта в Стек-Интеграцию"]');
  getImportFiles = () => cy.get('[data-test-id="Импорт файлов из ГИС"]');
  getOnlineCashExport = () => cy.get('[data-test-id="Экспорт для online-касс"]');
  getDatabaseVerification = () =>
    cy.get('[data-test-id="Проверки ведения базы данных для выгрузки в ГИС ЖКХ"]');

  openMasterExport() {
    this.getMasterExport().click();
    return this;
  }

  openImportFiles() {
    this.getImportFiles().click();
    return this;
  }

  openOnlineCashExport() {
    this.getOnlineCashExport().click();
    return this;
  }

  openDatabaseVerification() {
    this.getDatabaseVerification().click();
    return this;
  }
}
