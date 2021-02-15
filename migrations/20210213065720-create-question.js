'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      qna: {
        type: Sequelize.STRING
      },
      createdat: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedat: {
        allowNull: false,
        type: Sequelize.DATE
      },
      tableName: 'questions'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Questions');
  }
};