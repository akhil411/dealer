const router = require("express").Router();
const quickQuoteController = require("../../controllers/quickQuoteController");

router.route("/getQuote")
    .post(quickQuoteController.getQuote);

module.exports = router;
