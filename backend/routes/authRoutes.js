const express = require("express");
const router = express.Router();

const authController = require("../controllers/authControllers");

router.post("/login", authController.loginPOST);
router.post("/signup", authController.signupPOST);

module.exports = router;
