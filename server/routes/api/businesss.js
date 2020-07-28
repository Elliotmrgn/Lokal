const router = require("express").Router();
const businessController = require("../../controllers/businessController");

router
  .route("/")
  .get(businessController.findAll)
  .post(businessController.create);

module.exports = router;