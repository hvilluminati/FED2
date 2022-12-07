import { useState, useEffect } from 'react';
import { axiosLogin } from '../axioscalls';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

export default function Login(func) {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();
	const nav = useNavigate();

	async function login() {
		await axiosLogin(username, password).then((resp) => {
			localStorage.setItem('jwt', resp.data.jwt);
			// var decoded = jwtDecode(resp.data.jwt);
			// localStorage.setItem('type', Object.values(decoded)[1]);
		});

		nav('/welcome');
	}

	return (
		<div id='page'>
			<h1>Login</h1>
			<textarea
				id='username'
				className='signInText'
				rows='1'
				onChange={(event) => setUsername(event.target.value)}
			/>
			<textarea
				id='password'
				className='signInText'
				rows='1'
				onChange={(event) => setPassword(event.target.value)}
			/>
			<button id='login' onClick={login}>
				Sign in
			</button>
		</div>
	);
}
