'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Charas', 'element_id', Sequelize.INTEGER);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Charas', 'element_id', Sequelize.INTEGER);
  }
};
