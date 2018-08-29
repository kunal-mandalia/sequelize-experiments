'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Sponsorships', [
      {
        id: 4,
        playerId: 2,
        company: "Nike",
        value: 1000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        playerId: 3,
        company: "Puma",
        value: 500000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Sponsorships', null, {});
  }
};
