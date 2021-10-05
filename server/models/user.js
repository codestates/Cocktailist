"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // models.user.hasMany(models.post, {
      //   foreignKey: 'user_id',
      //   onDelete: 'cascade'
      // })
      // models.user.hasMany(models.favorite, {
      //   foreignKey: 'userId',
      //   onDelete: 'cascade'
      // })
      models.user.belongsToMany(models.cocktails, {
        through: models.favorite,
        foreignKey: "cocktailId",
      });
    }
  }
  user.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      mobile: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
