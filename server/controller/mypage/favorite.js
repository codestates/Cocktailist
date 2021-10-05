const { favorite, cocktails, recipes, ingredients } = require("../../models");
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
                required: true
              },
            where: {
              userId: userToken.id
            }
          })
      const allImage = myFavorite.map((el) => {
        return el.cocktail.image
      })
      res.status(201).send(allImage)
    }
  },

  clickFavorite: async (req, res) => {
    const userToken = isAuthorized(req);
    if (!userToken) {
      res.sendStatus(404);
    } else {
      const favoriteInfo = await favorite.findAll({
        include: {
          model: cocktails,
          required: true,
          include: {
            model: recipes,
            required: true,
          }
        },
        where: {
          userId: userToken.id
        }
      })
    }
  },
};

/*
  include로 모델을 모을수 있다
*/
