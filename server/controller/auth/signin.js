const {
  generateAccessToken,
  generateRefreshToken,
  sendAccessToken,
  sendRefreshToken,
} = require("../tokenFunctions");
const { user } = require("../../models");

module.exports = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(422).send({ message: "insufficient informaition" });
  }
  const userInfo = await user.findOne({
    where: { email: req.body.email, password: req.body.password },
  });
  if (!userInfo) {
    res.status(404).send({ message: "not match user" });
  } else {
    delete userInfo.dataValues.password;
    const accessToken = generateAccessToken(userInfo.dataValues);
    const refreshToken = generateRefreshToken(userInfo.dataValues);

    sendRefreshToken(res, refreshToken);
    sendAccessToken(res, accessToken, userInfo.dataValues);
  }
};
