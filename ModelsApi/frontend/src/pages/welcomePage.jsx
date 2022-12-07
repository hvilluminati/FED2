import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Welcome() {
	const nav = useNavigate();
	useEffect(() => {
		if (localStorage.getItem('type') !== 'Model') nav('/');
	}, []);

	return <div id='page'></div>;
}
