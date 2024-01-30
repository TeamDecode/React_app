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

let calendarEvents = [];

// Route to create a new event
app.post('/api/events', (req, res) => {
  const newEvent = { id: calendarEvents.length + 1, ...req.body };
  calendarEvents.push(newEvent);
  res.status(201).json(newEvent);
});

// Route to update an existing event
app.put('/api/events/:id', (req, res) => {
  const { id } = req.params;
  const index = calendarEvents.findIndex(event => event.id === Number(id));
  
  if (index > -1) {
    const updatedEvent = { ...calendarEvents[index], ...req.body };
    calendarEvents[index] = updatedEvent;
    res.status(200).json(updatedEvent);
  } else {
    res.status(404).json({ message: "Event not found" });
  }
});

// Route to get all events
app.get('/api/events', (req, res) => {
  res.status(200).json(calendarEvents);
});