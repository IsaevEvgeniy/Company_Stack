import { AddressFundPage } from '../support/page/AddressFundPage';
import { HeaderMenu } from '../support/page/HeaderMenu';
import { LeftMenu } from '../support/page/LeftMenu';
import { LoginPage } from '../support/page/LoginPage';

const username = Cypress.env('LOGIN');
const password = Cypress.env('PASSWORD');

describe('Полный цикл работы с районом', () => {
  let loginPage;
  let leftMenu;
  let addressFundPage;
  let headerMenu;
  let testArea;
  let updatedArea;

  before(() => {
    loginPage = new LoginPage();
    leftMenu = new LeftMenu();
    addressFundPage = new AddressFundPage();
    headerMenu = new HeaderMenu();
    testArea = `Тестовый район ${Date.now()}`;
    updatedArea = `${testArea} - ОБНОВЛЕН`;
  });

  it('Диалоговое окно - подтверждение сессии', () => {
    loginPage.navigate();
    loginPage.login(username, password);
    loginPage.continueSession(true);
    headerMenu.openUserProfile();
  });

  it('Диалоговое окно - отклонение сессии', () => {
    loginPage.navigate();
    loginPage.login(username, password);
    loginPage.continueSession(false);
    loginPage.verifyLogoIsDisplayed();
  });

  describe('CRUD операции с районом', () => {
    const loginAndOpenAddressFund = () => {
      loginPage.navigate();
      loginPage.login(username, password);
      loginPage.continueSession(true);
      leftMenu.openAddressFund();
      addressFundPage.openAddresses();
    };

    const logout = () => {
      headerMenu.clickUserMenu();
      headerMenu.clickExet();
    };

    it('Создание района (Create)', () => {
      loginAndOpenAddressFund();
      addressFundPage.clickAddButton();
      addressFundPage.openDistrict();
      addressFundPage.creationDistrict(testArea);
      logout();
    });

    it('Редактирование района (Update)', () => {
      loginAndOpenAddressFund();
      addressFundPage.findDistrictByName(testArea);
      addressFundPage.changeDistrictName(testArea, updatedArea);
      logout();
    });

    it('Удаление района (Delete)', () => {
      loginAndOpenAddressFund();
      addressFundPage.findDistrictByName(updatedArea);
      addressFundPage.deleteDistrictByName(updatedArea);
      logout();
    });
  });
});
