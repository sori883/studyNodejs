'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('Users', [
      { username: 'aaa', password: bcrypt.hashSync('secret', bcrypt.genSaltSync(8)), createdAt: now, updatedAt: now},
      { username: 'bbb', password: bcrypt.hashSync('secret', bcrypt.genSaltSync(8)), createdAt: now, updatedAt: now},
      { username: 'ccc', password: bcrypt.hashSync('secret', bcrypt.genSaltSync(8)), createdAt: now, updatedAt: now},
      { username: 'ddd', password: bcrypt.hashSync('secret', bcrypt.genSaltSync(8)), createdAt: now, updatedAt: now},
      { username: 'eee', password: bcrypt.hashSync('secret', bcrypt.genSaltSync(8)), createdAt: now, updatedAt: now},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};