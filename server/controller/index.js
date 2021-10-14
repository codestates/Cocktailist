module.exports = {
  oauth: require("./auth/oauth"),
  signin: require("./auth/signin"),
  signout: require("./auth/signout"),
  signup: require("./auth/signup"),

  cocktails: require("./cocktail").cocktails,
  cocktail: require("./cocktail").cocktail,
  updateProfile: require("./mypage/updateProfile"),
  deleteAccount: require("./mypage/deleteAccount"),
  myFavorite: require("./mypage/favorite").myFavorite,
  deleteFavorite: require("./mypage/favorite").deleteFavorite,
  mostPopular: require("./cocktail").mostPopular,
  recommendation: require("./cocktail").recommendation,
  search: require("./cocktail").search,
  favorite: require("./cocktail").favorite,
  ingredients: require("./cocktail").ingredients,
  ingredient: require("./cocktail").ingredient,
};
