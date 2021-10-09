const express = require("express");
const router = express.Router();
const {
  updateProfile,
  deleteAccount,
  myFavorite,
  deleteFavorite,
  myPost,
  clickPost,
  deletePost
} = require("../controller")

router.post("/updateProfile", updateProfile)
router.get("/deleteAccount", deleteAccount)
router.get("/myFavorite", myFavorite)
router.get("/deleteFavorite/:id", deleteFavorite)
router.get("/myPost", myPost)
router.get("/clickPost/:id", clickPost)
router.get("/deletePost/:id", deletePost)

module.exports = router;