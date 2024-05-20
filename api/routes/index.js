const express = require("express");
const router = express.Router();
const pathfindingRoutes = require("./pathfindingRoutes");
const institutionRoutes = require("./institutionRoutes");
const userRoutes = require("./userRoutes");

//Use pathfinding routes under '/pathfinding'
router.use("/pathfinding", pathfindingRoutes);
//Use institution-related routes under '/institution'
router.use("/institution", institutionRoutes);
//Use user-related routes under '/user'
router.use("/user", userRoutes);

//Export for use in app.js
module.exports = router;
