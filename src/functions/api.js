const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const routes = require("../src/routes/index");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.use((req, res, next) => {
    console.log("Received request:", req.method, req.path, req.body);
    next();
});

app.use((req, res, next) => {
    res.status(404).send("Endpoint not found");
});

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send("An internal server error occurred");
});

module.exports.handler = serverless(app);
