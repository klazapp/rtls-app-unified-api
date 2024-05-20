const express = require("express");
const router = express.Router();
const {
  getTextPath,
  getCoordPath,
} = require("../controllers/pathfindingController");

//Route for text-based pathfinding queries.
router.get("/text", getTextPath);
//Route for coordinate-based pathfinding queries.
router.get("/coord", getCoordPath);

//Export routes to be used in the main index router.
module.exports = router;
