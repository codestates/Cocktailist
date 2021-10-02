const { isAuthorized, deleteRefreshToken } = require("../tokenFunctions");

module.exports = (req, res) => {
  const tokenData = isAuthorized(req);
  if (!tokenData) {
    res.status(404).send({ message: "not authrized" });
  }
  deleteRefreshToken(res);
  res.send({ message: "logout success" });
};
