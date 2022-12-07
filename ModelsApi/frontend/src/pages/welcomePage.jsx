import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Welcome() {
	const nav = useNavigate();
	useEffect(() => {
		if (localStorage.getItem('type') !== 'Model') nav('/');
	}, []);

	return (
		<div id='page'>
			{localStorage.getItem('type') === 'Manager' && (
				<>
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
				</>
			)}
			{localStorage.getItem('type') !== 'Manager' && (
				<Link to='expense'>
					<button>Add expense</button>
				</Link>
			)}
			<Link to='JobList'>
				<button>Jobs</button>
			</Link>
		</div>
	);
}
