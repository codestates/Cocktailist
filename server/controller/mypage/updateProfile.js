const { user } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  const userInfo = isAuthorized(req)
  if(!userInfo) {
    res.sendStatus(404)
  } else {
    const { username, password, mobile } = req.body;
    await user.update(
      {
        username,
        password,
        mobile,
      },
      {
        where: { email: userInfo.email },
      }
    )
    .then(() => {
      res.sendStatus(201)
    })
  }
}
