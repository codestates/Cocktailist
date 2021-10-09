const { user, post } = require("../../models");
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
          postId: el.id,
          image: el.image,
        }
      })
      res.status(201).send(allImage)
    }
  },

  clickPost: async (req, res) => {
    const { id } = req.params
    const userToken = isAuthorized(req)
    if(!userToken) {
      res.sendStatus(404)
    } else {
      const postInfo = await post.findOne({
        include: {
          model: user,
          attributes: ["username"],
          required: true
        },
        where: {
          id
        },
      })
      const postModal = {
        username: postInfo.user.username,
        title: postInfo.title,
        content: postInfo.content,
        image: postInfo.image,
        createdAt: postInfo.createdAt
      }
      res.status(201).send(postModal)
    }
  },

  deletePost: async (req, res) => {
    const { id } = req.params
    await post.destroy({
      where: {
        id
      }
    })
    .then(() => {
      res.sendStatus(201)
    })
  }
}