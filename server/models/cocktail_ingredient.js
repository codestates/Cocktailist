'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cocktail_ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  cocktail_ingredient.init({
    cocktail_id: DataTypes.INTEGER,
    ingredients_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cocktail_ingredient',
  });
  return cocktail_ingredient;
};