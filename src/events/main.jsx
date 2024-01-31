import UserProfile from '../component/UserProfile'; // Update the path if necessary
import StudyBuddySearch from '../component/StudyBuddySearch'; // Update the path if necessary
import MyCalendar from '../component/MyCalendar';
import EventForm from '../component/EventForm';

const Home = () => {
	return (
		<div className="App">
			<UserProfile />
			<StudyBuddySearch />
			<MyCalendar />
			<EventForm />
		</div>
	)

};

export default Home;


