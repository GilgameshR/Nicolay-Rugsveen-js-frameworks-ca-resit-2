import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MenuBar = () => {
	return (
		<Navbar expand='lg' className='bg-body-tertiary'>
			<Container>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link>
							<Link to='/'>Home</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to='/About'>About</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to='/Contact'>Contact</Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default MenuBar;
