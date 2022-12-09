import { useState, useEffect } from 'react';
import { axiosCreateExpense } from '../axioscalls';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export default function AddExpense() {
	const [expense, setExpense] = useState();
	const [text, setText] = useState();
	const [jobID, setJobID] = useState();
	const [modelID, setModelID] = useState();
	const [date, setDate] = useState();

	const nav = useNavigate();

	useEffect(() => {
		if (localStorage.getItem('type') == 'none') nav('/');
		else if (localStorage.getItem('type') == 'Manager') nav('/welcome');
	});

	function handleExpenseClick() {
		setDate = new Date().getDate;

		var jwt = localStorage.getItem('jwt');
		if (jwt !== null) {
			var decoded = jwtDecode(jwt);
			setModelID(Object.values(decoded)[2]);
		}

		axiosCreateExpense(modelID, jobID, date, text, expense).then((resp) => {
			console.log(resp);
		});
	}

	return (
		<div id='page'>
			<h1>Add Expenses</h1>
			<div id='expenseTitle' className='expensePage'>
				Expenses
			</div>
			<textarea
				id='expense'
				className='signInText'
				rows='1'
				onChange={(event) => setExpense(event.target.value)}
				placeholder='Add expense value'></textarea>
			<div id='jobTitle' className='jobPage'>
				Job text
			</div>
			<textarea
				id='text'
				className='signInText'
				rows='1'
				onChange={(event) => setText(event.target.value)}
				placeholder='Add text'></textarea>
			<div id='jobIDTitle' className='jobIDPage'>
				Job ID
			</div>
			<textarea
				id='jobID'
				className='signInText'
				rows='1'
				onChange={(event) => setJobID(event.target.value)}
				placeholder='Add the JobID'></textarea>
			<button onClick={handleExpenseClick} id='expenseBtn'>
				Add expense
			</button>
		</div>
	);
}
