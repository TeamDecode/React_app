import React from 'react';
import { Tabs, Tab } from './navabr/tabs';

import Home from './home/main.jsx'
import Quiz from './quiz/main.jsx'
import Events from './events/main.jsx'
import Study from './study/main.jsx'

const App = () => {
	return (
		<div>
			<Tabs>
				<Tab label=" home">
					<Home />
				</Tab>
				<Tab label="emoji_events">
					<Quiz />
				</Tab>
				<Tab label="school">
					<Study />
				</Tab>
				<Tab label="event">
					<Events />
				</Tab>
			</Tabs>
		</div>
	);
};

export default App;
