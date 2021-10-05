const { user, favorite, cocktails, recipes, ingredients } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = {
  myFavorite: async (req, res) => {
    const userToken = isAuthorized(req);
    if(!userToken) {
      res.sendStatus(404)
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
      const myFavorite = await favorite.findAll({include: cocktails })
      res.status(201).send(myFavorite)
    }
  },

  clickFavorite: async (req, res) => {
    const userToken = isAuthorized(req);
    if(!userToken) {
      res.sendStatus(404)
    } else {
      const userInfo = await user.findOne({
        where: {  }
      }) 
    }
  }
}

/*
  include로 모델을 모을수 있다
*/