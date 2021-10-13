const express = require("express");
const router = express.Router();
const {
  updateProfile,
  deleteAccount,
  myFavorite,
  deleteFavorite,
} = require("../controller")

router.post("/updateProfile", updateProfile)
router.get("/deleteAccount", deleteAccount)
router.get("/myFavorite", myFavorite)
router.get("/deleteFavorite/:id", deleteFavorite)

module.exports = router;