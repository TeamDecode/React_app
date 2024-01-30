
import React, { useState } from 'react';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    subjects: '',
    studyTimes: '',
    // Add other profile fields as needed
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit profile data to backend
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 id="name" type="text" placeholder="Name" name="name" value={profile.name} onChange={handleChange}/>
        </div>

        {/* Repeat similar blocks for other fields like 'subjects' and 'studyTimes' */}

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Save Profile
        </button>
      </form>
    </div>
  );
}

export default UserProfile;
