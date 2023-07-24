'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'John',
        email: 'john@gmail',
        password: 'aaa111',
        year: '22',
        role: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Anna',
        email: 'ann@gmail',
        password: 'aaa111',
        year: '18',
        role: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});

  }
};

