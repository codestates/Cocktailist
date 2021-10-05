'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.favorite.belongsTo(models.user, {
        foreignKey: 'id'
      })
      models.favorite.belongsTo(models.cocktails, {
        foreignKey: 'id'
      })
    }
  };
  favorite.init({
    // user_id: DataTypes.INTEGER,
    // cocktail_id: DataTypes.INTEGER
    userId: DataTypes.INTEGER,
    cocktailId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'favorite',
  });
  return favorite;
};