import React from 'react';
import MenuBar from '../components/MenuBar';
import Heading from '../components/Heading';
import AccordionComp from '../components/Accordion';

export default function About() {
	return (
		<div>
			<h1>
				<Heading pageName='About' />
			</h1>
			<MenuBar />
			<AccordionComp />
		</div>
	);
}
