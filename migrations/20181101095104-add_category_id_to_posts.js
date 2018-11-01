'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('Posts', 'category_id', { 
      type: Sequelize.INTEGER
    })
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Posts', 'category_id')
  }
};
