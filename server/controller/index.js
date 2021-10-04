module.exports = {
  oauth: require("./auth/oauth"),
  signin: require("./auth/signin"),
  signout: require("./auth/signout"),
  signup: require("./auth/signup"),
  cocktails: require("./cocktail").cocktails,
  cocktail: require("./cocktail").cocktail,
};
