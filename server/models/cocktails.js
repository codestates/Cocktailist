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
      // models.cocktails.hasMany(models.favorite, {
      //   foreignKey: 'cocktailId'
      // })
      models.cocktails.belongsToMany(models.user, {
        through: models.favorite,
      });
      models.cocktails.belongsToMany(models.ingredients, {
        through: models.cocktail_ingredient,
      });
    }
  }
  cocktails.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      favorite_count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "cocktails",
    }
  );
  return cocktails;
};
