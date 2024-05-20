const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  findAndReturnUserData,
  updateAndReturnUserData,
} = require("../controllers/userController");

//User authentication endpoint
router.post("/auth/login", authenticateUser);
router.post("/profile/load", findAndReturnUserData);
router.post("/profile/update", updateAndReturnUserData);

module.exports = router;
