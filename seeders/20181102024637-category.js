'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Category', [{
        name: 'book'
      }, {
        name: 'cook'
      }, {
        name: 'sport'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Category', null, {});
  }
};
