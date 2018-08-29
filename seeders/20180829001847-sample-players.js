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
   return queryInterface.bulkInsert('Players', [
     {
        id: 2,
        teamId: 1,
        name: "Aaron Ramsey",
        position: "MID",
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        id: 3,
        teamId: 1,
        name: "Peter Cech",
        position: "GK",
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
   return queryInterface.bulkDelete('Players', null, {})
  }
};
