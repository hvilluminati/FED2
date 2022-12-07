import { useState, useEffect } from 'react';
import { axiosLogin } from '../axioscalls';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

export default function Login() {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	async function login(func) {
		await axiosLogin(username, password).then((resp) => {
			// localStorage.clear();
			localStorage.setItem(resp.data.key, resp.data.value);
			console.log(resp.data.key, resp.data.value);
		});
		// var jwt = localStorage.getItem('jwt');
		// var decoded = jwtDecode(jwt);

		// console.log(decoded);

		// useNavigate('welcome');

		console.log(username, password);
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
