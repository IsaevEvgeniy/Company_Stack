## О проекте:

## Решение тестового задания на позицию AQA Engineer

## Структура проекта

```
Company_Stack/
│
├── cypress/
│     ├── e2e/
│     │     └── district-crud.cy.js
│     │
│     ├── fixtures/
│     │     └── example.json
│     │
│     └── support/
│             ├── page/
│             │     ├── AddressFundPage.js
│             │     ├── CloseMonthPage.js
│             │     ├── DocumentsPage.js
│             │     ├── GisPage.js
│             │     ├── HeaderMenu.js
│             │     ├── InfocenterPage.js
│             │     ├── LeftMenu.js
│             │     ├── LoginPage.js
│             │     ├── MetersDataPage.js
│             │     ├── OperationsPage.js
│             │     ├── PaymentsPage.js
│             │     ├── ReferencesPage.js
│             │     ├── ReportsPage.js
│             │     └── SettingsPage.js
│             │
│             ├── commands.js
│             ├── e2e.js
│             └── url.js
│
├── cypress.config.js
├── package-lock.json
├── package.json
├── README.md
└── TEST_CASES.md
```

## Инструкция по запуску

## 1. Установка зависимостей

```bash
npm install
```

## 2. Установка Cypress

```bash
npm install cypress --save-dev
```

## 3. Установка Allure

```bash
npm install -D @shelex/cypress-allure-plugin allure-commandline
```

## 4. Настройка окружения

Для пользовательской настройки создайте файл .env:

```bash
LOGIN = *****
PASSWORD = *****
```

## 5. Запуск тестов

### Режим без графического интерфейса

```bash
npx cypress run --env allure=true
```

### Режим с графическим интерфейсом

```bash
npx cypress open
```

## 6. Просмотр результатов

### Генерация отчета Allure

```bash
npx allure generate allure-results --clean -o allure-report
```

### Открытие отчета Allure

```bash
npx allure open allure-report
```
