"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "orders",
      [
        {
          date: new Date(),
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: new Date(),
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: new Date(),
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: new Date(),
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: new Date(),
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: new Date(),
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("orders", null, {});
  },
};
