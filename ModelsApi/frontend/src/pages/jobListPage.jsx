//import { useState, useEffect } from 'react';
//import { axiosCreateExpense } from '../axioscalls';


////<script>
////	const list = [{job: '', expense: 1, id: 1 }, {job: '', expense: 1, id: 1 }, {job: '', expense: 1, id: 1 }];
////	let Len = list.length;

////	let text = "<ul>";
////		for (let i = 0; i < Len; i++) {
////			text += "<li>" + list[i] + "</li>";
////}
////		text += "</ul>";
////</script>



//export default function JobList() {
//	const [expense, setExpense] = useState();
//	const [job, setJob] = useState();
//	const [jobID, setJobID] = useState();
//	const [modelID, setModelID] = useState();
//	const [date, setDate] = useState();
	

//	function handleClick() {
//			var expenseList = [{}];
//			expense = document.getElementById('expense').value;
//			expenseList.push(expense);

//		const current = new Date();
//			date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;


//			axiosCreateExpense(modelID, jobID, date, job, expense).then((resp) => {
//				localStorage.setItem(resp.data.key, resp.data.value);
//			});
//	};
	


//	return (
//		<div id='jobListPage'>
//			<h1>Job List</h1>
//			<div id='jobTitle' className='jobPage' column='1'> Jobs </div>
//			<ul>
//				{job.map((item, i) => { <li key={i}> {item} </li> })}
//			</ul>
//			<div id='expenseTitle' className='jobPage' column='1'> Expenses </div>
//			<ul>
//				{expense.map((list, i) => { <li key={i}> {list} </li> })}
//			</ul>
//			<textarea id='expense' className='expenseText' rows='1' > Add expense</textarea>
//			<textarea id='job' className='jobText' rows='1' > Add job you want to add expense to</textarea>
//			<button onClick={handleClick} id='expenseBtn'>Add expense</button>
//		</div>

//	);
//}
