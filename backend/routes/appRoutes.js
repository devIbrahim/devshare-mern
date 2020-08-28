const express = require("express");
const router = express.Router();

const appController = require("../controllers/appController");

const { requireAuth } = require("../middleware/jwtMiddleware");

router.get("/userdata", requireAuth, appController.userdataGET);

module.exports = router;
