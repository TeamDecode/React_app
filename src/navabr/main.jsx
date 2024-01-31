// src/components/SideNav.js
import React from 'react';
const SideNav = () => {
	const generateNavItem = (iconName) => (
		<li className="mb-2" key={iconName}>
			<a href="#" className="flex items-center hover:text-gray-300">
				<i className="material-icons h-14">{iconName}</i>

			</a>
		</li>
	);

	const navItems = [
		{ icon: 'home' },
		{ icon: 'emoji_events' },
		{ icon: 'calendar_month' },
		{ icon: 'school' },
		// Add more items as needed
	];

	return (
		<nav className="bg-gray-800 text-white p-4 h-screen w-min">
			<ul>
				{navItems.map((item) => generateNavItem(item.icon))}
			</ul>
		</nav>
	);
};

export default SideNav;

