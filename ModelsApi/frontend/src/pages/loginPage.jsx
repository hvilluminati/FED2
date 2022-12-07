import { useState, useEffect } from 'react';
import { axiosLogin } from '../axioscalls';

export default function Login() {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	function login() {
		axiosLogin(username, password).then((resp) => {
			localStorage.setItem(resp.data.key, resp.data.value);
		});

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
