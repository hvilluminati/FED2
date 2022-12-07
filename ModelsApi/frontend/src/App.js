import React, { useEffect, useState } from 'react';
import Login from './pages/loginPage';
import Welcome from './pages/welcomePage';
import Jobs from './pages/JobListPage';
import AddExpense from './pages/AddExpensePage';
import ChangeModelOnJob from './pages/ChangeModelOnJob';
import CreateJob from './pages/CreateJob';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { setBaseUrl } from './Services/api';
import { AddManager } from './pages/addManager';
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
