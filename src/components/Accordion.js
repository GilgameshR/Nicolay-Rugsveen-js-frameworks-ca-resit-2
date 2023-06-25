import { Accordion, Card, Button, Tab, Nav } from 'react-bootstrap';

function AccordionComp() {
	return (
		<div>
			<div className='d-md-none'>
				{' '}
				{/* Display accordion on mobile widths */}
				<Accordion defaultActiveKey='0'>
					<Accordion.Item eventKey='0'>
						<Accordion.Header>Lorem ipsum</Accordion.Header>
						<Accordion.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
							non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey='1'>
						<Accordion.Header>Lorem ipsum</Accordion.Header>
						<Accordion.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
							non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</div>
			<div className='d-none d-md-block'>
				{' '}
				{/* Display tabs on wider widths */}
				<Tab.Container defaultActiveKey='0'>
					<Nav variant='tabs'>
						<Nav.Item>
							<Nav.Link eventKey='0'>Lorem ipsum</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey='1'>Lorem ipsum</Nav.Link>
						</Nav.Item>
					</Nav>
					<Tab.Content>
						<Tab.Pane eventKey='0'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
							non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</Tab.Pane>
						<Tab.Pane eventKey='1'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
							non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</Tab.Pane>
					</Tab.Content>
				</Tab.Container>
			</div>
		</div>
	);
}

export default AccordionComp;
