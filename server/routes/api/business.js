const router = require("express").Router();
const businessController = require("../../controllers/businessController");

router
  .route("/")
  .get(businessController.findAll)
  .post(businessController.create);
// .get(businessController.findByEmail);

router
  .route("/:id")
  .get(businessController.findById)
  .put(businessController.update);

router
  .route("/schedule")
  .post(businessController.postSchedule)
  .get(businessController.getProfileSchedule);

router.route("/:id/schedule").get(businessController.getProfileSchedule);

router.route("/viaSearch/:search").get(businessController.findViaSearch);
router.route("/viaTags/:tags").get(businessController.findViaTags);

module.exports = router;
