Cypress.on('uncaught:exception', (err, runnable) => {
  console.log('Игнорируем ошибку приложения:', err.message);
  return false;
});

import './commands';
