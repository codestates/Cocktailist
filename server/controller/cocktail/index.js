const { cocktails, recipes, ingredients, favorite } = require("../../models");

module.exports = {
  cocktails: async (req, res) => {
    if (req.query.name) {
      const word = req.query.name;
      const data = await cocktails.findAll({
        attributes: ["id", "name", "image"],
      });
      const copyData = [];
      data.map((el) =>
        copyData.push({
          id: el.id,
          name: el.name.toLowerCase(),
          image: el.image,
        })
      );
      const result = copyData.filter((el) => el.name.includes(word));
      res.send(result);
    }
    const data = await cocktails.findAll({
      attributes: ["id", "name", "image", "favorite_count"],
    });
    res.send(data);
  },
  cocktail: async (req, res) => {
    const { id } = req.params;
    const data = await cocktails.findOne({
      include: [
        {
          model: ingredients,
          attributes: ["name", "image"],
          through: {
            attributes: [],
          },
        },
        {
          model: recipes,
          attributes: ["recipe"],
        },
      ],
      where: { id },
      attributes: ["id", "name", "image", "favorite_count"],
    });
    if (!data) {
      res.status(404).send({ message: "not found cocktail" });
    }
    const recipeArr = data.recipes.map((el) => el.recipe).reverse();
    const result = {
      id: data.id,
      name: data.name,
      image: data.image,
      ingredients: data.ingredients,
      recipes: recipeArr,
    };

    res.send(result);
  },
  mostPopular: async (req, res) => {
    const data = await cocktails.findAll({
      attributes: ["id", "name", "image", "favorite_count"],
    });
    data.sort((a, b) => b.favorite_count - a.favorite_count);
    res.send(data);
  },
  recommendation: async (req, res) => {
    const data = await cocktails.findAll();
    const lastId = data.length;

    const randomData = await cocktails.findOne({
      include: [
        {
          model: ingredients,
          attributes: ["name", "image"],
          through: {
            attributes: [],
          },
        },
        {
          model: recipes,
          attributes: ["recipe"],
        },
      ],
      where: { id: Math.floor(Math.random() * lastId) + 1 },
      attributes: ["id", "name", "image", "favorite_count"],
    });
    const recipeArr = randomData.recipes.map((el) => el.recipe).reverse();
    const result = {
      id: randomData.id,
      name: randomData.name,
      image: randomData.image,
      favorite_count: randomData.favorite_count,
      ingredients: randomData.ingredients,
      recipes: recipeArr,
    };

    res.send(result);
  },
  favorite: async (req, res) => {
    const { userId, cocktailId } = req.body;
    const data = await cocktails.findOne({
      where: { id: cocktailId },
    });
    data.increment({ favorite_count: 1 });
    await favorite.create({ userId, cocktailId });
    res.send(data);
  },
};
