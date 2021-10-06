var express = require("express");
var router = express.Router();
const {
  cocktails,
  cocktail,
  mostPopular,
  recommendation,
  favorite,
} = require("../controller");

router.get("/", cocktails);
router.get("/mostpopular", mostPopular);
router.get("/recommendation", recommendation);
router.post("/favorite", favorite);
router.get("/:id", cocktail);

module.exports = router;
