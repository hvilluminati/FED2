import React, { useEffect } from 'react';
import Login from './pages/loginPage';
import Welcome from './pages/welcomePage';
import Jobs from './pages/JobListPage';
import AddModelToJob from './pages/ChangeModelOnJob';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import AddManager from './pages/AddManager';
import jwtDecode from 'jwt-decode';

function App() {
	// setBaseUrl('https://localhost:7181/api/');

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
				{/* <Route path='addmanager' element={<AddManager />} /> */}
				<Route path='ChangeModelOnJob' element={<ChangeModelOnJob />} />
				<Route path='CreateJob' element={<CreateJob />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
