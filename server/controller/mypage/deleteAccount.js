const { user } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  const userInfo = isAuthorized(req);
  await user.destroy({
    where: { email: userInfo.email }
  })
  .then(() => {
    res.sendStatus(201)
  })
}
