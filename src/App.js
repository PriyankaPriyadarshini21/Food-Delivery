import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/App/AppLayout';
import MealDetails from './components/Dashboard/MealDetails';
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<AppLayout />} />
            <Route path="/meal/:idMeal" element={<MealDetails />} />
  
          </Routes>
        </div>
      </Router>
  );
}

export default App;
