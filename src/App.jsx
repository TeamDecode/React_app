import React from 'react';
<<<<<<< Updated upstream
import UserProfile from './component/UserProfile'; // Update the path if necessary
import StudyBuddySearch from './component/StudyBuddySearch'; // Update the path if necessary
import MyCalendar from './component/MyCalendar';
import EventForm from './component/EventForm';
import './App.css';
=======
import './App.css';
// Import your components
import UserProfile from './component/UserProfile';
import StudyBuddySearch from './component/StudyBuddySearch';
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
      <UserProfile />
      <StudyBuddySearch />
	  <MyCalendar />
	  <EventForm />
      {/* ... other components */}
=======
      <header className="App-header">
        {/* You can place a navigation bar here */}
        <h1>Study Buddy App</h1>
      </header>
      <main>
        <UserProfile />
        <StudyBuddySearch />
        {/* You will add more components like DiscussionForum, CalendarView, etc. here in the future */}
      </main>
      <footer>
        {/* Footer content goes here */}
      </footer>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
