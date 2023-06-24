import React from 'react';
import MenuBar from '../components/MenuBar';
import Heading from '../components/Heading';

export default function About() {
	return (
		<div>
			<h1>
				<Heading pageName='About' />
			</h1>
			<MenuBar />
		</div>
	);
}
