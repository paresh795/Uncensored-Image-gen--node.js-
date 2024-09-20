require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = 4000;

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to handle CORS (allow requests from your frontend)
app.use(cors());

// Use routes
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});