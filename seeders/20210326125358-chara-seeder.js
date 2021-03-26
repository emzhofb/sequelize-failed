'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Charas', [{
      name: 'Hu Tao',
      element_id: 1,
      createdAt: new Date(),
      updatedAt: new Date() 
    },{
      name: 'Diluc',
      element_id: 1,
      createdAt: new Date(),
      updatedAt: new Date() 
    },{
      name: 'Venti',
      element_id: 3,
      createdAt: new Date(),
      updatedAt: new Date() 
    },{
      name: 'Keqing',
      element_id: 5,
      createdAt: new Date(),
      updatedAt: new Date() 
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Charas', null, {});
  }
};
