import { useState, useEffect } from 'react';
import { axiosGetJobs } from '../axioscalls';
import { useNavigate } from 'react-router-dom';

export default function JobList() {
	const [listJob, setListJob] = useState();
	const nav = useNavigate();

	useEffect(() => {
		axiosGetJobs().then((jobs) => {
			setListJob(jobs.data);
			console.log(jobs.data[1].customer);
		});
		if (localStorage.getItem('type') === 'none') nav('/');
	}, []);

	return (
		<div id='page'>
			<h1 id='jobListHeader'>List of Jobs</h1>
			<h2>If wrong data is shown refresh page</h2>
			<div id='Customer'>Customer</div>
			<div id='startDate'>Start Date</div>
			<div id='days'>Days</div>
			<div id='location'>Location</div>
			<div id='comment'>Comment</div>
			<ul id='customerList'>
				{listJob &&
					listJob.map((list, i) => <li key={i}> {list.customer} </li>)}
			</ul>
			<ul id='startDateList'>
				{listJob &&
					listJob.map((list, i) => <li key={i}> {list.startDate} </li>)}
			</ul>
			<ul id='daysList'>
				{listJob && listJob.map((list, i) => <li key={i}> {list.days} </li>)}
			</ul>
			<ul id='locationList'>
				{listJob &&
					listJob.map((list, i) => <li key={i}> {list.location} </li>)}
			</ul>
			<ul id='commentList'>
				{listJob &&
					listJob.map((list, i) => <li key={i}> {list.comments} </li>)}
			</ul>
		</div>
	);
}
