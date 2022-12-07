import { useState, useEffect } from 'react';
import { axiosCreateExpense } from '../axioscalls';
import jwtDecode from 'jwt-decode';

export default function AddExpense() {
  const [expense, setExpense] = useState();
  const [text, setText] = useState();
  const [jobID, setJobID] = useState();
  const [modelID, setModelID] = useState();
  const [date, setDate] = useState();

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
      <h1>Add expenses</h1>
      <div id='expenseTitle' className='expensePage' column='1'>
        {' '}
        Expenses{' '}
      </div>
      <ul>
        {expense.map((list, i) => {
          <li key={i}> {list} </li>;
        })}
      </ul>
      <textarea
        id='expense'
        className='expenseText'
        rows='1'
        onChange={(event) => setExpense(event.target.value)}
      >
        {' '}
        Add expense
      </textarea>
      <textarea
        id='text'
        className='jobText'
        rows='1'
        onChange={(event) => setText(event.target.value)}
      >
        {' '}
        Add text to the expense
      </textarea>
      <textarea
        id='jobID'
        className='jobIDClass'
        rows='1'
        onChange={(event) => setJobID(event.target.value)}
      >
        {' '}
        Add the JobID
      </textarea>
      <button onClick={handleExpenseClick} id='expenseBtn'>
        Add expense
      </button>
    </div>
  );
}
