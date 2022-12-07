import React, { useEffect } from 'react';
import Login from './pages/loginPage';
import Welcome from './pages/welcomePage';
import AddExpense from './pages/AddExpensePage';
import ChangeModelOnJob from './pages/ChangeModelOnJob';
import CreateJob from './pages/CreateJob';
import JobList from './pages/JobListPage';
import CreateModel from './pages/CreateModel';
import AddManager from './pages/AddManager.jsx';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

function App() {
	useEffect(() => {
		var jwt = localStorage.getItem('jwt');
		if (jwt !== null) {
			var decoded = jwtDecode(jwt);
			localStorage.setItem('type', Object.values(decoded)[1]);
		}
	}, []);
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='welcome' element={<Welcome />} />
				<Route path='expense' element={<AddExpense />} />
				<Route path='addmanager' element={<AddManager />} />
				<Route path='ChangeModelOnJob' element={<ChangeModelOnJob />} />
				<Route path='CreateJob' element={<CreateJob />} />
				<Route path='CreateModel' element={<CreateModel />} />
				<Route path='JobList' element={<JobList />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
