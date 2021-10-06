<<<<<<< HEAD
const {
  user,
  favorite,
  cocktails,
  recipes,
  ingredients,
} = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = {
  myFavorite: async (req, res) => {
    const userToken = isAuthorized(req);
    if (!userToken) {
      res.sendStatus(404);
    } else {
      // const userInfo = await user.findOne({
      //   where: { email: userToken.email }
      // }, {
      //   model: [{
      //     include: 'favorites'
      //   }]
      // })
      // const favoriteInfo = await favorite.findAll({
      //   where: { user_id: userInfo.id }
      // })
      // const cocktailInfo = await cocktails.findAll({
      //   where: { id: favoriteInfo.cocktail_id }
      // })
      // res.status(201).send({
      //   cocktails: {
      //     id: cocktailInfo.id,
      //     image: cocktailInfo.image
      //   }
      // })
      const myFavorite = await favorite.findAll({
        include: cocktails,
        where: { userId: userToken.id },
      });
      res.status(201).send(myFavorite);
    }
  },

  clickFavorite: async (req, res) => {
    const userToken = isAuthorized(req);
    if (!userToken) {
      res.sendStatus(404);
    } else {
      const userInfo = await user.findOne({
        where: {},
      });
    }
  },
};

/*
  include로 모델을 모을수 있다
=======
const { favorite, cocktails, recipes, ingredients } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
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
    const allImageId = myFavorite.map((el) => {
      return {
        id: el.cocktail.id,
        image: el.cocktail.image,
      }
    })
    res.status(201).send(allImageId)
  }
}

/*
  include로 모델을 모을수 있다
  favorite 이미지 클릭시 페이지 전환을 통해 칵테일 상세 페이지로 이동
  (클라이언트 history.push(/cocktails/:id)
>>>>>>> 515e2442cd45173df4465987855b293ecd15183c
*/
