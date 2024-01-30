// server/server.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const port = 5000;

let studyBuddies = []; // In-memory "database" for study buddies
let calendarEvents = []; // In-memory "database" for calendar events

app.use(cors());
app.use(bodyParser.json());

// Route to handle profile creation
app.post('/api/profile', (req, res) => {
  const profile = req.body;
  profile.id = studyBuddies.length + 1;
  studyBuddies.push(profile);
  res.status(201).json(profile);
});

// Route to handle search
app.post('/api/search', (req, res) => {
  const searchQuery = req.body;
  const results = studyBuddies.filter(buddy =>
    buddy.subjects.includes(searchQuery.subject) &&
    buddy.availability.includes(searchQuery.availability)
  );
  res.status(200).json(results);
});

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
    calendarEvents[index] = { ...calendarEvents[index], ...req.body };
    res.status(200).json(calendarEvents[index]);
  } else {
    res.status(404).json({ message: "Event not found" });
  }
});

// Route to get all events
app.get('/api/events', (req, res) => {
  res.status(200).json(calendarEvents);
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
