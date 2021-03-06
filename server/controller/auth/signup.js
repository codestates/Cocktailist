const { user } = require("../../models");

module.exports = async (req, res) => {
  const { username, email, password, mobile } = req.body;
  if (!email || !password || !username || !mobile) {
    res.status(422).send({ message: "insufficient informaition" });
  } else {
    const [userObj, created] = await user.findOrCreate({
      where: { email },
      defaults: {
        username,
        password,
        mobile,
      },
    });
    if (!created) {
      res.send({ message: "email exists" });
    } else {
      res.status(201).send(userObj);
    }
  }
};
