const express = require('express');
const cors = require('cors'); // Optional: For handling cross-origin requests

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS if needed
app.use(express.json()); // Parse JSON requests

// Routes
app.get('/api/projects', (req, res) => {
  // Replace with logic to fetch your projects from a database or other source
  const projects = [
    { id: 1, title: 'Project 1', description: 'Description of Project 1' },
    { id: 2, title: 'Project 2', description: 'Description of Project 2' }
  ];
  res.json(projects);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
