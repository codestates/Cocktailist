const { user } = require("../../models");

module.exports = async (req, res) => {
  const { username, email, password, mobile } = req.body;
  if (!email || !password || !username || !mobile) {
    res.status(422).send({ message: "insufficient informaition" });
  }
  const existUser = await users.findOne({
    where: { email },
  });
  if (existUser) {
    res.status(409).send({ message: "email exists" });
  }
  await users.create({
    username,
    email,
    password,
    mobile,
    image: "",
  });
  res.status(201).send({ message: "signup complete" });
};
