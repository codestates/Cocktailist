const { favorite, post, cocktails, recipes, ingredients } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports =  {
  myPost: async (req, res) => {
    const userToken = isAuthorized(req);
    if(!userToken) {
      res.sendStatus(404)
    } else {
      const myPost = await post.findAll({
        where: {
          userId: userToken.id
        }
      })
      const allImage = myPost.map((el) => {
        return {
          id: el.id,
          image: el.image,
        }
      })
      res.status(201).send(allImage)
    }
  },

  // clickPost: async (req, res) => {
    
  // }
}