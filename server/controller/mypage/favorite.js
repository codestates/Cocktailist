const { favorite, cocktails } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = {
  myFavorite: async (req, res) => {
    const userToken = isAuthorized(req);
    if (!userToken) {
      res.sendStatus(404);
    } else {
      const myFavorite = await favorite.findAll({
        include: {
          model: cocktails,
          required: true,
        },
        where: {
          userId: userToken.id,
        },
      });
      const allImageId = myFavorite.map((el) => {
        return {
          id: el.id,
          cocktailId: el.cocktail.id,
          image: el.cocktail.image,
        };
      });
      res.status(201).send(allImageId);
    }
  },

  deleteFavorite: async (req, res) => {
    const { id } = req.params;
    await favorite
      .destroy({
        where: {
          id,
        },
      })
      .then(() => {
        res.sendStatus(201);
      });
  },
};
