import { useState, useEffect } from 'react';
import { axiosLogin } from '../axioscalls';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

export default function Login() {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	async function login(func) {
		await axiosLogin(username, password).then((resp) => {
			localStorage.setItem('jwt', resp.data.jwt);
		});

		// useNavigate('welcome');
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
