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
      //   foreignKey: 'cocktail_id'
      // })
      models.cocktails.belongsToMany(models.user, { through: 'favorite' })
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
