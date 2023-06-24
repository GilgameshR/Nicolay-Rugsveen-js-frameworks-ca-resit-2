import React, { useEffect, useState } from 'react';
import API from '../constants/api';

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
			<h1>API Data</h1>
			<input type='text' placeholder='Search by name' value={searchTerm} onChange={handleSearch} />
			{loading ? (
				<div>Loading...</div>
			) : (
				<ul>
					{filteredData.map((item, index) => (
						<li key={index}>
							Name: {item.name}, Domains: {item.domains.join(', ')}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Schools;
