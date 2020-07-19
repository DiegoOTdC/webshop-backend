"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          fullName: "Diégo Teixeira da Costa",
          dateofbirth: "17-06-1992",
          phone: "+31 6 12125811",
          email: "d.teixeiradacosta@hotmail.com",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "George Pio",
          dateofbirth: "13-06-1987",
          phone: "0847891",
          email: "george@hotmail.com",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Agnes Woltjes",
          dateofbirth: "25-11-1963",
          phone: "0639198333",
          email: "agnes23@live.nl",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
