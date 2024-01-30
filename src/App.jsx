import React from 'react';
import UserProfile from './component/UserProfile'; // Update the path if necessary
import StudyBuddySearch from './component/StudyBuddySearch'; // Update the path if necessary
import MyCalendar from './component/MyCalendar';
import EventForm from './component/EventForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <UserProfile />
      <StudyBuddySearch />
	  <MyCalendar />
	  <EventForm />
      {/* ... other components */}
    </div>
  );
}

export default App;
