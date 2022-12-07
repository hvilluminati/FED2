import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Welcome() {
	return (
		<div id='page'>
			<Link to='addmanager'>
				<button>Add manager</button>
			</Link>
			<Link to='ChangeModelOnJob'>
				<button>Change models on jobs</button>
			</Link>
			<Link to='CreateJob'>
				<button>Add a job</button>
			</Link>
			<Link to='CreateModel'>
				<button>Add a model</button>
			</Link>
			<Link to='expense'>
				<button>Add expense</button>
			</Link>
			<Link to='JobList'>
				<button>Jobs</button>
			</Link>
		</div>
	);
}
