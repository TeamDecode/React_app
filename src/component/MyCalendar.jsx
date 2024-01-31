// MyCalendar.jsx
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import EventForm from './EventForm'; // Make sure this path is correct

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
	const [events, setEvents] = useState([
		{
			id: 0,
			start: moment().toDate(),
			end: moment().add(1, "hours").toDate(),
			title: "Sample Event",
		},
		// ...more events
	]);
	const [showEventForm, setShowEventForm] = useState(false);
	const [currentEvent, setCurrentEvent] = useState(null);

	const handleSelectSlot = ({ start, end }) => {
		// You should set 'id' when creating a new event to distinguish between new and existing events
		setCurrentEvent({ id: null, start, end, title: '' });
		setShowEventForm(true);
	};

	const handleEventClick = (event) => {
		setCurrentEvent(event);
		setShowEventForm(true);
	};

	const handleEventSave = async (eventData) => {
		const method = eventData.id != null ? 'PUT' : 'POST'; // Assuming 'PUT' for updates, 'POST' for new
		const url = `http://localhost:5000/api/events${eventData.id ? `/${eventData.id}` : ''}`;

		try {
			const response = await fetch(url, {
				method: method,
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(eventData),
			});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const savedEvent = await response.json();
			if (eventData.id != null) {
				// Update the event in state
				setEvents(events.map(event => event.id === savedEvent.id ? savedEvent : event));
			} else {
				// Add the new event to state
				setEvents([...events, savedEvent]);
			}
		} catch (error) {
			console.error('There was a problem saving the event:', error);
		}
		setShowEventForm(false);
		setCurrentEvent(null);
	};

	const handleCloseForm = () => {
		setShowEventForm(false);
		setCurrentEvent(null);
	};

	return (
		<div>
			<Calendar
				localizer={localizer}
				events={events}
				startAccessor="start"
				endAccessor="end"
				onSelectEvent={handleEventClick}
				onSelectSlot={handleSelectSlot}
				selectable
				style={{ height: 500 }}
			/>
			{showEventForm && (
				<EventForm
					initialEvent={currentEvent}
					onSave={handleEventSave}
					onCancel={handleCloseForm}
				/>
			)}
		</div>
	);
};

export default MyCalendar;
