const router = require("express").Router();
const bookRoutes = require("./books");
const businessRoutes = require("./business");
// Book routes
router.use("/books", bookRoutes);
router.use("/business", businessRoutes);

module.exports = router;
