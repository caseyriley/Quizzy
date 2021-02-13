'use strict';
const {
  Model, DATE
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Question.init({
    qna: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};