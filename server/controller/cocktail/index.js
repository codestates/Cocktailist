const { cocktails, recipes, ingredients } = require("../../models");

module.exports = {
  cocktails: async (req, res) => {
    const data = await cocktails.findAll();
    const result = [];
    data.map((el) => {
      result.push({
        name: el.name,
        image: el.image,
        favorite_count: el.favorite_count,
      });
    });
    res.send(result);
  },
  cocktail: async (req, res) => {
    const { id } = req.params;
    const recipes = await recipes.findOne({
      where: {
        cocktail_Id: id,
      },
    });
    const ingredients = await ingredients.findOne({
      where: {
        cocktail_Id: id,
      },
    });
    const data = await cocktails.findByPk(id);
    res.send(data);
  },
};
