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
    await queryInterface.bulkInsert('favorites', [{
      id: 1,
      userId: 1,
      cocktailId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 2,
      userId: 1,
      cocktailId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 3,
      userId: 1,
      cocktailId: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 4,
      userId: 1,
      cocktailId: 31,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
