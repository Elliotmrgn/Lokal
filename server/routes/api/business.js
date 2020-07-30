const router = require("express").Router();
const businessController = require("../../controllers/businessController");

router
  .route("/")
  .get(businessController.findAll)
  .post(businessController.create);

router.route("/:id").get(businessController.findById);

router
  .route("/schedule")
  .post(businessController.postSchedule)
  .get(businessController.getProfileSchedule);

router.route("/:id/schedule").get(businessController.getProfileSchedule);

router.route("/viaSearch/:search").get(businessController.findViaSearch);
router.route("/:tags").get(businessController.findViaTags);

module.exports = router;
