const router = require("express").Router();
const businessController = require("../../controllers/businessController");

router.route("/").post(businessController.create);

module.exports = router;
