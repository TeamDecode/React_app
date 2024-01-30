// EventForm.jsx
import React, { useState, useEffect } from 'react';

const EventForm = ({ onSave, onCancel, initialEvent }) => {
  const [event, setEvent] = useState(initialEvent || { title: '', start: new Date(), end: new Date() });

  useEffect(() => {
    if (initialEvent) {
      setEvent(initialEvent);
    }
  }, [initialEvent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(event);
  };

  return (
    <div>
      {/* Modal or form UI elements here */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={event.title}
          onChange={handleChange}
        />
        {/* Include other fields for start time, end time, etc. */}
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default EventForm;
