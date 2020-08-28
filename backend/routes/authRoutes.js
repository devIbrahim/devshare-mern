const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.post("/login", authController.loginPOST);
router.post("/signup", authController.signupPOST);
router.get("/test", authController.testGET);

module.exports = router;
