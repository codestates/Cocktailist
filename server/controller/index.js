module.exports = {
  oauth: require("./auth/oauth"),
  signin: require("./auth/signin"),
  signout: require("./auth/signout"),
  signup: require("./auth/signup"),

  cocktails: require("./cocktail").cocktails,
  cocktail: require("./cocktail").cocktail,
  updateProfile: require("./mypage/updateProfile"),
  deleteAccount: require("./mypage/deleteAccount"),
  myFavorite: require("./mypage/favorite"),
  myPost: require("./mypage/post").myPost,
  mostPopular: require("./cocktail").mostPopular,
  recommendation: require("./cocktail").recommendation,
  search: require("./cocktail").search,
  favorite: require("./cocktail").favorite,
};
