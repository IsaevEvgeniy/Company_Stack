export class OperationsPage {
  getExports = () => cy.get('[data-test-id="Выгрузки в файлы"]');
  getASDUpload = () => cy.get('[data-test-id="Загрузка показаний из АСД"]');
  getBalanceWizard = () => cy.get('[data-test-id="Мастер коррекции сальдо"]');
  getDebtWriteOff = () => cy.get('[data-test-id="Списание дебиторской задолженности в забаланс"]');
  getGUIDsSetup = () => cy.get('[data-test-id="Массовая расстановка ГУИДов на домах"]');
  getUploads = () => cy.get('[data-test-id="Подкачки из файлов"]');
  getDistributors = () => cy.get('[data-test-id="Принять показания по распределителям"]');
  getCompensation = () => cy.get('[data-test-id="Ежемесячный расчет компенсаций"]');
  getReserve = () => cy.get('[data-test-id="Создание резерва по сомнительным долгам для БУ"]');
  getPP354 = () =>
    cy.get('[data-test-id="Массовое формирование соглашений согласно пп 72-75 ПП РФ №354"]');
}
