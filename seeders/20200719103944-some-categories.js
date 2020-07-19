"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "kitchen",
          description: "Anything you would want for in your kitchen",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "office",
          description: "Think tables, chairs and electronics!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "bedroom",
          description: "Anything for your comfort ;)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
