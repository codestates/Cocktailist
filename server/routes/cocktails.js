var express = require("express");
var router = express.Router();
const {
  cocktails,
  cocktail,
  mostPopular,
  recommendation,
  favorite,
  ingredients,
  ingredient,
} = require("../controller");

router.get("/", cocktails);
router.get("/ingredients", ingredients);
router.get("/mostpopular", mostPopular);
router.get("/recommendation", recommendation);
router.post("/favorite", favorite);
router.get("/:id", cocktail);
router.get("/ingredients/:id", ingredient);

module.exports = router;
