// import { useState } from 'react';

// export function AddManager() {
// 	const initialState = {
// 		firstName: '',
// 		lastName: '',
// 		email: '',
// 		password: '',
// 	};
// 	const [state, setState] = useState(initialState);

// 	function handleInputChange(event) {
// 		const name = event.target.name;

// 		setState((state) => {
// 			return {
// 				...state,
// 				[name]: event.target.value,
// 			};
// 		});
// 	}

// 	async function sendData() {
// 		try {
// 			await postData('managers', state);
// 			setState(initialState);
// 		} catch (error) {
// 			alert(error.message);
// 		}
// 	}

// 	function handleSubmit(event) {
// 		event.preventDefault();
// 		sendData();
// 	}

// 	function handleReset(event) {
// 		setState(initialState);
// 		event.preventDefault();
// 	}

// 	return (
// 		<>
// 			<h2>Add Manager</h2>
// 			<form onSubmit={handleSubmit}>
// 				<label>
// 					First Name:
// 					<input
// 						name='firstName'
// 						type='text'
// 						value={state.firstName}
// 						onChange={handleInputChange}
// 					/>
// 				</label>
// 				<br />
// 				<label>
// 					Last Name:
// 					<input
// 						name='lastName'
// 						type='text'
// 						value={state.lastName}
// 						onChange={handleInputChange}
// 					/>
// 				</label>
// 				<br />
// 				<label>
// 					Email:
// 					<input
// 						name='email'
// 						type='text'
// 						value={state.email}
// 						onChange={handleInputChange}
// 					/>
// 				</label>
// 				<br />
// 				<label>
// 					Password:
// 					<input
// 						name='password'
// 						type='text'
// 						value={state.password}
// 						onChange={handleInputChange}
// 					/>
// 				</label>
// 				<br />
// 				<input type='reset' value='Cancel' onClick={handleReset} />{' '}
// 				<input type='submit' value='Submit' />
// 			</form>
// 		</>
// 	);
// }
