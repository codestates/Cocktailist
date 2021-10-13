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
    const { id } = req.params
    console.log(id)
    await favorite.destroy({
      where: {
        id
      }
    })
    .then(() => {
      res.sendStatus(201)
    })
  }
};

/*
  include로 모델을 모을수 있다
  favorite 이미지 클릭시 페이지 전환을 통해 칵테일 상세 페이지로 이동
  (클라이언트 history.push(/cocktails/:id)
*/
