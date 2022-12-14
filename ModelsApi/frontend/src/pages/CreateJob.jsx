import { useState, useEffect } from 'react';
import { axiosCreateJob } from '../axioscalls';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function CreateJobs() {
  const [customer, setCustomer] = useState();
  const [startDate, setStartDate] = useState();
  const [days, setDays] = useState();
  const [location, setLocation] = useState();
  const [comments, setComments] = useState();

  const nav = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('type') == 'none') nav('/');
    else if (localStorage.getItem('type') == 'Model') nav('/welcome');
  });

  function CreateJob() {
    axiosCreateJob(customer, startDate, days, location, comments).then(
      (resp) => {
        console.log(resp);
      }
    );
  }

  return (
    <div id='page'>
      <Link to='/welcome'>
        <button className='button button1'>
          <span>Back</span>
        </button>{' '}
      </Link>
      <h1>Create a new Job</h1>
      <text>Customer</text>
      <textarea
        id='_customer'
        className='signInText'
        rows='1'
        onChange={(event) => setCustomer(event.target.value)}
      />
      <text>Start date</text>
      <textarea
        id='_startDate'
        className='signInText'
        rows='1'
        onChange={(event) => setStartDate(event.target.value)}
      />
      <text>Number Days</text>
      <textarea
        id='_days'
        className='signInText'
        rows='1'
        onChange={(event) => setDays(event.target.value)}
      />
      <text>Location</text>
      <textarea
        id='_location'
        className='signInText'
        rows='1'
        onChange={(event) => setLocation(event.target.value)}
      />
      <text>Comments</text>
      <textarea
        id='_comments'
        className='signInText'
        rows='1'
        onChange={(event) => setComments(event.target.value)}
      />
      <button id='create' onClick={CreateJob}>
        Create the Job
      </button>
    </div>
  );
}
