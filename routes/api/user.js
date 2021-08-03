const router = require("express").Router();
const userController = require("../../controllers/userController");
const verifyToken = require('../../auth/verifyToken');

// Matches with "/api/user/validate"
router.post("/validate", userController.validate);

// Matches with "/api/user/createopp"
router.post("/createopp", verifyToken, userController.createOpp);

module.exports = router;
