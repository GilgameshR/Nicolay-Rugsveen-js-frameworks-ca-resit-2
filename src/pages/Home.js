import React from 'react';
import MenuBar from '../components/MenuBar';
import Heading from '../components/Heading';
import Schools from '../components/Schools';

export default function Home() {
	return (
		<>
			<div>
				<h1>
					<Heading pageName='Home' />
				</h1>
			</div>
			<MenuBar />

			<div className='App'></div>
			<Schools />
		</>
	);
}
