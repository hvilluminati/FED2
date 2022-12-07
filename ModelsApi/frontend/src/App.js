import React from 'react';
import Login from './pages/loginPage';
import Welcome from './pages/welcomePage';
import Jobs from './pages/jobListPage';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { setBaseUrl } from './Services/api';
import { AddManager } from './pages/addManager';
import jwtDecode from 'jwt-decode';

function App() {
	setBaseUrl('https://localhost:7181/api/');

	const [type, setType] = useState('none');

	useEffect(() => {
		var jwt = localStorage.getItem('jwt');
		var decoded = jwtDecode(jwt);

		setType(Object.values(decoded)[1]);
	}, []);
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Login func={setType} />} />
				<Route path='welcome' element={<Welcome />} />
				<Route path='jobs' element={<Jobs />} />
				<Route path="/addmanager" element={<AddManager/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
