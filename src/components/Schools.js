import React, { useEffect, useState } from 'react';
import API from '../constants/api';
import ListGroup from 'react-bootstrap/ListGroup';

const Schools = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(API);
				const result = await response.json();
				setData(result);
				setLoading(false);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);
	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	const filteredData = data.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
	return (
		<div>
			<h1>Schools</h1>
			<input type='text' placeholder='Search by name' value={searchTerm} onChange={handleSearch} />
			{loading ? (
				<div>Loading...</div>
			) : (
				<ListGroup>
					{filteredData.map((item, index) => (
						<ListGroup.Item key={index}>
							School: {item.name}, Website: {item.domains.join(', ')}
						</ListGroup.Item>
					))}
				</ListGroup>
			)}
		</div>
	);
};

export default Schools;
