const express = require("express");
const router = express.Router();
const institutionController = require("../controllers/institutionController");

//Endpoint to retrieve all institution data
router.post("/returnAll", institutionController.getAllInstitutions);

module.exports = router;
