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
      <h1>Add Expenses</h1>
      <div id='expenseTitle' className='expensePage'>
        Expenses
      </div>
      <textarea
        id='expense'
        className='signInText'
        rows='1'
        onChange={(event) => setExpense(event.target.value)}
      >
        Add expense Value
      </textarea>
      <div id='jobTitle' className='jobPage'>
        Job text
      </div>
      <textarea
        id='text'
        className='signInText'
        rows='1'
        onChange={(event) => setText(event.target.value)}
      >
        Add text
      </textarea>
      <div id='jobIDTitle' className='jobIDPage'>
        Job ID
      </div>
      <textarea
        id='jobID'
        className='signInText'
        rows='1'
        onChange={(event) => setJobID(event.target.value)}
      >
        Add the JobID
      </textarea>
      <button onClick={handleExpenseClick} id='expenseBtn'>
        Add expense
      </button>
    </div>
  );
}
