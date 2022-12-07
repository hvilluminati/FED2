export default function Login() {
	return (
		<div id='page'>
			<h1>Login</h1>
			<textarea id='username' className='signInText' rows='1' />
			<textarea id='password' className='signInText' rows='1' />
			<button id='login'>Sign in</button>
		</div>
	);
}
