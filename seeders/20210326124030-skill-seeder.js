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
    await queryInterface.bulkInsert('Skills', [{
      element: 'Pyro',
      createdAt: new Date(),
      updatedAt: new Date() 
    },{
      element: 'Hydro',
      createdAt: new Date(),
      updatedAt: new Date() 
    },{
      element: 'Anemo',
      createdAt: new Date(),
      updatedAt: new Date() 
    },{
      element: 'Cryo',
      createdAt: new Date(),
      updatedAt: new Date() 
    },{
      element: 'Electro',
      createdAt: new Date(),
      updatedAt: new Date() 
    },{
      element: 'Geo',
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
    await queryInterface.bulkDelete('Skills', null, {});
  }
};
