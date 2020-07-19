"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "addresses",
      [
        {
          streetName: "Van Spilbergenstraat",
          number: "42-2",
          postalCode: "1057 RJ",
          city: "Amsterdam",
          country: "The Netherlands",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          streetName: "InTheJungle",
          number: "2ape",
          postalCode: "1234 AB",
          city: "Fortaleza",
          country: "Brazil",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          streetName: "Elshof",
          number: "17",
          postalCode: "1234 AB",
          city: "Veendam",
          country: "Germany",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("addresses", null, {});
  },
};
