require("dotenv").config();

const clientId = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;
const axios = require("axios");
const githubUrl = "https://github.com/login/oauth/access_token";
const googleUrl = "https://google.com.login/oauth/access_token";
const kakaoUrl = "https://kakao.com.login/oauth/access_token";

module.exports = async (req, res) => {
  // if(req.body)
  await axios.post(url, {
    client_id: clientId,
    client_secret: clientSecret,
    code: req.body.authorizationCode
  }, {
    headers: {
      accept: "application/json",
      withCredentials: true
    }
  })
  .then((data) => {
    res.status(200).json({
      accessToken: data.data.access_token
    })
  })
  .catch(() => {
    res.status(404)
  })
};
