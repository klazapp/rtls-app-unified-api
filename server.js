//Import the configured Express application.
const app = require("./src/app");
//Node.js HTTP module to create an HTTP server.
const http = require("http");
// Set the port from environment variables or default to 3000.
const port = process.env.PORT || 3000;

// Create an HTTP server that uses the Express app.
const server = http.createServer(app);

// Listen on the specified port and log when the server is running.
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
