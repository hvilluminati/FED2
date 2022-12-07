import { useState, useEffect } from 'react';
import { axiosGetJobs } from '../axioscalls';

export default function JobList() {
  var listJob = axiosGetJobs();
  return (
    <div id='page'>
      <h1>Add expenses</h1>
      <div id='JobListTitle' className='jobListPage' column='1'>
        {' '}
        Job List{' '}
      </div>
      <ul>
        {listJob.map((list, i) => {
          <li key={i}> {list} </li>;
        })}
      </ul>
    </div>
  );
}
