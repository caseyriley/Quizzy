'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING(150),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      language: {
        type: Sequelize.STRING(150)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      tableName: 'users'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};