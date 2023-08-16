const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the React frontend
app.use(express.static(path.join(__dirname, 'client/build')));

// Sample API route
app.get('/api/data', (req, res) => {
  res.json({ message: 'Sample data from the server' });
});

// Serve the React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
