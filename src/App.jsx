import React from 'react';
import UserProfile from './component/UserProfile'; // Update the path if necessary
import StudyBuddySearch from './component/StudyBuddySearch'; // Update the path if necessary
import './App.css';

function App() {
  return (
    <div className="App">
      <UserProfile />
      <StudyBuddySearch />
      {/* ... other components */}
    </div>
  );
}

export default App;
