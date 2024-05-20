//Import the Express framework.
const express = require("express");
//Middleware to enable CORS.
const cors = require("cors");
//Import routes from the routes directory.
const routes = require("./routes/index");

const app = express();

//Use CORS middleware to allow cross-origin requests.
app.use(cors());
//Use middleware to parse JSON-formatted request bodies.
app.use(express.json());
//Set up base route '/api' and use imported routes.
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

//Export the app for use in server.js.
module.exports = app;
