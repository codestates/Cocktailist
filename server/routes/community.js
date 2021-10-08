const express = require("express");
const router = express.Router();
const {
  communityInfo,
  clickCommunity,
  addPost
} = require("../controller")

router.get("/communityInfo", communityInfo)
router.get("/clickCommunity/:id", clickCommunity)
router.post("/addPost", addPost)

module.exports = router;