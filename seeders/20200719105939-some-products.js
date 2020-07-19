"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "spoon",
          description:
            "A utensil commonly used for eating soup. With a beautiful decortive pattern",
          price: 2,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/d/df/Souvenir_Spoon_from_Fords_Theatre%2C_Washington_DC.jpg",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Office chair",
          description: "Very comfortable office chair with wheels!",
          price: 229,
          imageUrl:
            "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_779,dpr_1.0,q_auto:best/v4/catalog/product/asset/e/b/f/0/ebf085a756ff3a1346f2ba10df1ad7b09d7aa252_OCHSAU001BLA_UK_Saul_Office_Chair_Walnut_and_Black_LB01.jpg",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Satin sheets",
          description:
            "Beautiful satin sheets to slide easily into bed, into your dreams!",
          price: 35,
          imageUrl:
            "https://cdn.webshopapp.com/shops/29934/files/328651237/455x800x3.jpg",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "apple macbook pro",
          description: "You won't need anything else. Apple all the way!",
          price: 1500,
          imageUrl:
            "https://p2.piqsels.com/preview/384/597/229/mac-laptop-apple-macbook-pro.jpg",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "office table",
          description:
            "Beautiful office table. To brighten up the place you work at.",
          price: 150,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Home_Sweet_Studio.jpg/1280px-Home_Sweet_Studio.jpg",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Blender",
          description: "For all your smoothy-needs",
          price: 70,
          imageUrl:
            "https://live.staticflickr.com/65535/49619788258_f2de529a57_b.jpg",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
