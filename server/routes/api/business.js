const router = require("express").Router();
const businessController = require("../../controllers/businessController");

router
  .route("/")
  .get(businessController.findAll)
  .post(businessController.create);

router
  .route("/:id")
  .get(businessController.findById);

  router
  .route("/schedule")
  .post(businessController.postSchedule);



module.exports = router;
