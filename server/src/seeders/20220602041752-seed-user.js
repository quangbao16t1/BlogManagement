
'use strict';

const {faker} = require('@faker-js/faker');

module.exports = {

  async up(queryInterface, Sequelize) {

    var listUser = [];
    for (var i = 0; i < 5; i++) {
      listUser.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        gender: 'Male',
        roleId: '3',
        passwordHash: faker.internet.password(),
        address: faker.address.city(),
        createAt: new Date(),
        updateAt: null
      });
    }

    await queryInterface.bulkInsert('users', listUser, {});
   
    var listPost = [];

    // const userIds = await queryInterface.bulkInsert("users", listUser, { returning: ["id"] });
    // console.log(userIds)

    for (var i = 0; i < 5; i++) {
      listPost.push({
        userId: Math.floor((Math.random() * 20) + 1),
        title: faker.company.companyName(),
        content: faker.lorem.paragraph(),
        imageCover: faker.image.avatar(),
        createAt: new Date(),
        updateAt: null
      });
    }

    await queryInterface.bulkInsert('posts', listPost, {});
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('users', null, {});
    return await queryInterface.bulkDelete('posts', null, {});
  }
};
