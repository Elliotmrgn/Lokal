const router = require("express").Router();
const businessController = require("../../controllers/businessController");

router
  .route("/")
  .get(businessController.findAll)
  .post(businessController.create)
  // .get(businessController.findByEmail);


router
  .route("/:id")
  .get(businessController.findById);

router
  .route("/schedule")
  .post(businessController.postSchedule)
  .get(businessController.getProfileSchedule);

router
  .route("/:id/schedule")
  .get(businessController.getProfileSchedule);



module.exports = router;
