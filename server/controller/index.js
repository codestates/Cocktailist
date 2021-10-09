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
  myPost: require("./mypage/post").myPost,
  clickPost: require("./mypage/post").clickPost,
  deletePost: require("./mypage/post").deletePost,
  mostPopular: require("./cocktail").mostPopular,
  recommendation: require("./cocktail").recommendation,
  search: require("./cocktail").search,
  favorite: require("./cocktail").favorite,
  communityInfo: require("./community").communityInfo,
  clickCommunity: require("./community").clickCommunity,
  addPost: require("./community").addPost
};
