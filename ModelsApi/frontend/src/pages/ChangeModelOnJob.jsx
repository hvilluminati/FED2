import { useState, useEffect } from 'react';
import { axiosAddModelToJob, axiosDeleteModelFromJob } from '../axioscalls';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ChangeModelsOnJobs() {
  const [modelId, setModelId] = useState();
  const [jobId, setJobId] = useState();

  const nav = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('type') == 'none') nav('/');
    else if (localStorage.getItem('type') == 'Model') nav('/welcome');
  });

  function AddModelToJob() {
    axiosAddModelToJob(modelId, jobId).then((resp) => {
      console.log(resp);
    });
  }
  function RemoveModelFromJob() {
    axiosDeleteModelFromJob(modelId, jobId).then((resp) => {
      console.log(resp);
    });
  }

  return (
    <div id='page'>
      <Link to='/welcome'>
        <button className='button button1'>
          <span>Back</span>
        </button>{' '}
      </Link>
      <h1>Add Model to job</h1>
      <text>Model ID</text>
      <textarea
        id='ModelID'
        className='signInText'
        rows='1'
        onChange={(event) => setModelId(event.target.value)}
      />
      <text>Job ID</text>
      <textarea
        id='JobID'
        className='signInText'
        rows='1'
        onChange={(event) => setJobId(event.target.value)}
      />
      <button id='Add' onClick={AddModelToJob}>
        Add Model
      </button>
      <button id='Remove' onClick={RemoveModelFromJob}>
        Delete Model
      </button>
    </div>
  );
}
