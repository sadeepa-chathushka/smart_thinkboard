import React from 'react';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import NoteDeatailPage from './pages/NoteDeatailPage';
import { Routes, Route } from 'react-router';
import toast from 'react-hot-toast';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDeatailPage />} />
      </Routes>

    </div>
  )
}

export default App;
