const router = require("express").Router();
const businessRoutes = require("./business");

router.use("/business", businessRoutes);

module.exports = router;
