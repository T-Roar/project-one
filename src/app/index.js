

const express = require('express');
const app = express();

// Define the routes
app.get('/', function(req, res) {
  res.send('Welcome to my website!');
});

app.get('/about', function(req, res) {
  res.send('About me page');
});

// Start the server
app.listen(8080, function() {
  console.log('Server started on port 8080. Visit http://localhost:8080');
});
