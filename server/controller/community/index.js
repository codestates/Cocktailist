const { post, user } = require("../../models/");
const { isAuthorized } = require("../tokenFunctions");

module.exports = {
  communityInfo: async (req, res) => {
    const userToken = isAuthorized(req);
    if(!userToken) {
      res.sendStatus(404)
    } else {
      const communityInfo = await post.findAll({
        attributes: ["id", "image"]
      })
      res.status(201).send(communityInfo)
    } 
  },

  clickCommunity: async (req, res) => {
    const userToken = isAuthorized(req);
    const { id } = req.params
    if(!userToken) {
      res.sendStatus(404)
    } else {
      const communityInfo = await post.findOne({
        include: {
          model: user,
          attributes: ["username", "image"],
          required: true
        },
        where: {
          id
        }
      })
      const communityModal = {
        username: communityInfo.user.username,
        userImage: communityInfo.user.image,
        title: communityInfo.title,
        content: communityInfo.content,
        cocktailImage: communityInfo.image
      }
      res.status(201).send(communityModal)
    }
  },

  addPost: async (req, res) => {
    const userToken = isAuthorized(req);
    if(!userToken) {
      res.status(404)
    } else {
      const { image, title, content } = req.body;
      await post.create({
        image,
        title,
        content,
        userId: userToken.id
      })
      res.sendStatus(201)
    }
  }
}

/*
  users.username,
  users.image,
  post.title,
  post.content,
  post.image
*/