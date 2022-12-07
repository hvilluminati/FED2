import React, { useEffect } from 'react';
import Login from './pages/loginPage';
import Welcome from './pages/welcomePage';
import Jobs from './pages/jobListPage';
import ChangeModelOnJob from './pages/ChangeModelOnJob';
import CreateJob from './pages/CreateJob';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
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
        {localStorage.getItem('type') !== 'none' && (
          <Route path='welcome' element={<Welcome />} />
        )}
        {/* <Route path='jobs' element={<Jobs />} /> */}
        <Route path='ChangeModelOnJob' element={<ChangeModelOnJob />} />
        <Route path='CreateJob' element={<CreateJob />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
