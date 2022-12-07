import { useState, useEffect } from 'react';
import { axiosCreateManager } from '../axioscalls';
import { useNavigate } from 'react-router-dom';

export default function AddManager() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const nav = useNavigate();

	useEffect(() => {
		if (localStorage.getItem('type') == 'none') nav('/');
		else if (localStorage.getItem('type') == 'Model') nav('/welcome');
	});

	function AddManager() {
		axiosCreateManager(firstName, lastName, email, password).then((resp) => {
			console.log(resp);
		});
	}
	return (
		<div id='page'>
			<h1>Create a new manager account</h1>
			<text>First name</text>
			<textarea
				id='_firstName'
				className='signInText'
				rows='1'
				onChange={(event) => setFirstName(event.target.value)}
			/>
			<text>Last name</text>
			<textarea
				id='_lastName'
				className='signInText'
				rows='1'
				onChange={(event) => setLastName(event.target.value)}
			/>
			<text>Email</text>
			<textarea
				id='_email'
				className='signInText'
				rows='1'
				onChange={(event) => setEmail(event.target.value)}
			/>
			<text>Password</text>
			<textarea
				id='_password'
				className='signInText'
				rows='1'
				onChange={(event) => setPassword(event.target.value)}
			/>
			<button id='create' onClick={AddManager}>
				Create the manager account
			</button>
		</div>
	);
}
