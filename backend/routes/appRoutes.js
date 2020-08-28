const express = require("express");
const router = express.Router();

const appController = require("../controllers/appController");
const { requireAuth } = require("../middleware/authMiddleware");

router.get("/userdata", requireAuth, appController.userdataGET);

module.exports = router;
