const router = require("express").Router();
const userRoutes = require("./user");
const quoteRoutes = require("./quickQuote");

router.use("/user", userRoutes);
router.use("/quickQuote", quoteRoutes);

module.exports = router;
