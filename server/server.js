// server/server.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 5000;

// In-memory "database" for demonstration purposes
let studyBuddies = [];

app.use(cors());
app.use(bodyParser.json());

// Route to handle profile creation
app.post('/api/profile', (req, res) => {
  const profile = req.body;
  profile.id = studyBuddies.length + 1; // Simple incrementing ID
  studyBuddies.push(profile);
  res.status(201).json(profile);
});

// Route to handle search
app.post('/api/search', (req, res) => {
  const searchQuery = req.body;
  // Simple search logic (expand this based on your requirements)
  const results = studyBuddies.filter(buddy =>
    buddy.subjects.includes(searchQuery.subject) &&
    buddy.availability.includes(searchQuery.availability)
  );
  res.status(200).json(results);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
