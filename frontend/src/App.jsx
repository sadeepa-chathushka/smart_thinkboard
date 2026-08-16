import React from 'react';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import NoteDeatailPage from './pages/NoteDeatailPage';
import { Routes, Route } from 'react-router';
import toast from 'react-hot-toast';

const App = () => {
  return (
    <div>
      <button className='btn btn-primary' onClick={() => toast.success('Button clicked!')}>Click me</button>
      <Routes>
            <Route path = "/" element = {<HomePage />} />
            <Route path = "/create" element = {<CreatePage />} />
            <Route path = "/note/:id" element = {<NoteDeatailPage />} />
        </Routes>
      
    </div>
  ) 
}

export default App;
