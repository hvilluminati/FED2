import { useState, useEffect } from 'react';
import { axiosAddModelToJob } from '../axioscalls';

export default function Login() {
  const [modelId, setModelId] = useState();
  const [jobId, setJobId] = useState();

  function AddModelToJob() {
    axiosAddModelToJob(modelId, jobId).then((resp) => {
      console.log(resp);
    });

    console.log(jobId, modelId);
  }

  return (
    <div id='page'>
      <h1>Add Model to job</h1>
      <textarea
        id='ModelID'
        className='signInText'
        rows='1'
        onChange={(event) => setModelId(event.target.value)}
      />
      <textarea
        id='JobID'
        className='signInText'
        rows='1'
        onChange={(event) => setJobId(event.target.value)}
      />
      <button id='Add' onClick={AddModelToJob}>
        Add Model
      </button>
    </div>
  );
}
