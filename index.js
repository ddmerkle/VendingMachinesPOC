// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

console.log(process.platform);

// Set the port for the server to listen on
const port = process.env.PORT || 8080;

// Start the server
app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );

