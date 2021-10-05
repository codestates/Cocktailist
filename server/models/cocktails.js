"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cocktails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.cocktails.hasMany(models.favorite, {
        foreignKey: 'cocktailId'
      })
      models.cocktails.hasMany(models.recipes, {
        foreignKey: 'coctailId'
      })
      models.cocktails.hasMany(models.cocktailsIngredients, {
        foreignKey: 'cocktailId'
      })
      // models.cocktails.belongsToMany(models.user, { through: 'favorite' })
    }
  }
  cocktails.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      favoriteCount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "cocktails",
    }
  );
  return cocktails;
};
