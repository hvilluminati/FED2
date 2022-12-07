
<script>
	const list = [{job: '', expense: 1, id: 1 }, {job: '', expense: 1, id: 1 }, {job: '', expense: 1, id: 1 }];
	let Len = list.length;

	let text = "<ul>";
		for (let i = 0; i < Len; i++) {
			text += "<li>" + list[i] + "</li>";
}
		text += "</ul>";
</script>
class expenseBtn extends React.Component{ 

	handleClick = () => {
		const elem = document.getElementById('expense').value;
		list.push(elem.ToString());
	}
};

export default function JobList() {
	return (
		<div id='jobListPage'>
			<h1>Job List</h1>
			<div id='jobTitle' className='jobPage' column='1'> Jobs </div>
			<ul>
				{list.map((item, i) => { <li key={i}> {item} </li> })}
			</ul>
			<div id='expenseTitle' className='jobPage' column='1'> Expenses </div>
			<ul>
				{list.map((item, i) => { <li key={i}> {item} </li> })}
			</ul>
			<textarea id='expense' className='expenseText' rows='1' value='Add expense'> Add expense</textarea>
			<button onClick={handleClick} id='expenseBtn'>Add expense</button>
		</div>

	);
}
