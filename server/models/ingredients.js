"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ingredients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.ingredients.hasMany(models.cocktail_ingredient, {
        foreignKey: "ingredientId",
      });
      // models.ingredients.belongsToMany(models.cocktails, {
      //   through: models.cocktail_ingredient,
      // });
    }
  }
  ingredients.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ingredients",
    }
  );
  return ingredients;
};
