import React, { useState } from 'react';
import MenuBar from '../components/MenuBar';
import Heading from '../components/Heading';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Select from 'react-select';

const schema = yup.object().shape({
	fName: yup.string().required('Please enter your first name').min(3, 'Name must be at least 3 letters'),
	lName: yup.string().required('Please enter your last name').min(3, 'Name must be at least 3 letters'),
	message: yup.string().required('Please enter your message').min(10, 'Message must be at least 10 letters'),
	email: yup
		.string()
		.matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter your Email')
		.email('Please enter a valid Email'),
});

/*
For some reason the yup.string().required().email validation method doesn't check if theres a . after the @ symbol.
Thus allowing to skip the top level domains when typing in emails. Because of this i instead opted for using a .matches() with regex for my validation.
*/

const options = [
	{ value: 'General', label: 'General' },
	{ value: 'Accounts', label: 'Accounts' },
	{ value: 'Staff', label: 'Staff' },
];

export default function Contact() {
	const [isValidationSuccessful, setValidationSuccessful] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm({
		resolver: yupResolver(schema),
	});

	function onSubmit(data) {
		console.log(data);
		setTimeout(() => {
			setValidationSuccessful(true);
		}, 3000);
	}
	const handleSelectChange = (selectedOption) => {
		setValue('select', selectedOption);
	};

	return (
		<>
			<div>
				<h1>
					<Heading pageName='Contact' />
				</h1>
				<MenuBar />
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input type='text' placeholder='Name' {...register('fName')} />
				{errors.fName && <span>{errors.fName.message}</span>}

				<input type='text' placeholder='Email' {...register('email')} />
				{errors.email && <span>{errors.email.message}</span>}

				<Select placeholder='Subject' options={options} onChange={handleSelectChange} />
				{errors.select && <span>{errors.select.message}</span>}

				<textarea type='text' placeholder='Message' {...register('message')} />
				{errors.message && <span>{errors.message.message}</span>}

				<button>Send</button>
			</form>

			{isValidationSuccessful && <span>This email is checked regularly during business hours (08:00 - 16:00). We’ll get back to you as soon as possible, usually within a few hours.</span>}
		</>
	);
}
