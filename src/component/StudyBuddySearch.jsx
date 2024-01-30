// src/components/StudyBuddySearch.jsx
import React, { useState } from 'react';

const StudyBuddySearch = () => {
  const [searchQuery, setSearchQuery] = useState({
    subject: '',
    availability: '',
    // Add other search parameters as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchQuery(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/search-study-buddies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(searchQuery),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data); // Process your search results as needed
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
            Subject
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="subject"
            name="subject"
            type="text"
            placeholder="Subject"
            value={searchQuery.subject}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="availability" className="block text-gray-700 text-sm font-bold mb-2">
            Availability
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="availability"
            name="availability"
            type="text"
            placeholder="Availability"
            value={searchQuery.availability}
            onChange={handleChange}
          />
        </div>

        {/* Add more search fields as needed */}

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default StudyBuddySearch;
