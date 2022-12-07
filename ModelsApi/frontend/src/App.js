import React, { useEffect, useState } from 'react';
import Login from './pages/loginPage';
import Welcome from './pages/welcomePage';
import Jobs from './pages/jobListPage';
import AddModelToJob from './pages/AddModelToJob';
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
				<Route path='jobs' element={<Jobs />} />
				<Route path='addModel' element={<AddModelToJob />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
