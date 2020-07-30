const router = require("express").Router();
const businessRoutes = require("./business");
const userRoutes = require("./user");

router.use("/business", businessRoutes);
router.use("/user", userRoutes);


module.exports = router;
