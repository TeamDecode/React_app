import React, { useState } from 'react';

const Tabs = ({ children }) => {
	const [activeTab, setActiveTab] = useState(children[0].props.label);

	const handleClick = (e, newActiveTab) => {
		e.preventDefault();
		setActiveTab(newActiveTab);
	};

	return (
		<li className="flex">
			<div className="h-screen w-min fixed bg-blue-900  border-gray-300">
				{children.map(child => (
					<button
						key={child.props.label}
						className={`${activeTab === child.props.label ? 'border-r-4 border-orange-500' : ''
							} flex-1 text-white font-bold py-4 my-3 px-4 `}
						onClick={e => handleClick(e, child.props.label)}
					>
						<i className='material-icons text-4xl'>{child.props.label}</i>
					</button>
				))}
			</div>
			<div className="py-4 m-20">
				{children.map(child => {
					if (child.props.label === activeTab) {
						return <div key={child.props.label}>{child.props.children}</div>;
					}
					return null;
				})}
			</div>
		</li>
	);
};

const Tab = ({ label, children }) => {
	return (
		<nav label={label} className="hidden bg-blue-900">
			<ul>
				{children}
			</ul>
		</nav>
	);
};
export { Tabs, Tab };
