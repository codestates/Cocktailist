"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cocktail_ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.cocktail_ingredient.belongsTo(models.cocktails, {
        foreignKey: "cocktailId",
      });
      models.cocktail_ingredient.belongsTo(models.ingredients, {
        foreignKey: "ingredientId",
      });
    }
  }
  cocktail_ingredient.init(
    {
      cocktailId: DataTypes.INTEGER,
      ingredientId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "cocktail_ingredient",
    }
  );
  return cocktail_ingredient;
};
