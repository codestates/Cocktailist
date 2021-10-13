require('dotenv').config();

const githubClientId = process.env.GITHUB_CLIENT_ID;
const githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
const googleClienttId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const axios = require('axios');
const githubUrl = 'https://github.com/login/oauth/access_token';
const googleUrl = 'https://accounts.google.com/o/oauth2/v2/auth';

module.exports = async (req, res) => {
  await axios
    .post(
      githubUrl,
      {
        client_id: githubClientId,
        client_secret: githubClientSecret,
        code: req.body.code,
      },
      {
        headers: {
          accept: 'application/json',
          withCredentials: true,
        },
      }
    )
    .then((data) => {
      res.status(200).json({
        accessToken: data.data.access_token,
      });
    })
    .catch(() => {
      res.status(404);
    });
};
