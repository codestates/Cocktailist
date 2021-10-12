const express = require("express");
const router = express.Router();
const {
  oauth,
  signin,
  signup,
  signout
} = require("../controller")

router.post("/oauth", oauth);
router.post("/signin", signin);
router.post("/signup", signup);
router.get("/signout", signout);

module.exports = router;