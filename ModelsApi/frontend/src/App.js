import React from 'react';
import Login from './pages/loginPage';
import Welcome from './pages/welcomePage';
import Jobs from './pages/jobListPage';
import AddModelToJob from './pages/AddModelToJob';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [type, setType] = useState('none');
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login func={setType} />} />
        <Route path='welcome' element={<Welcome />} />
        <Route path='jobs' element={<Jobs />} />
        <Route path='AddModelToJob' element={<AddModelToJob />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
