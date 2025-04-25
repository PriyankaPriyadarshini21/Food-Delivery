import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PopularDishes from "../Dashboard/PopularDishes";
import MealDetails from "../Dashboard/MealDetails";
import "./App.css";
import PopularDishes from './../Dashboard/PopularDishes';

function App() {
  const [searchResults, setSearchResults] = useState(null);
  
  const handleSearch = async (term) => {
    if (!term.trim()) {
      setSearchResults(null);
      return;
    }
    
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
      const data = await res.json();
      setSearchResults(data.meals || []);
    } catch (error) {
      console.error("Error searching meals:", error);
      setSearchResults([]);
    }
  };

  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Food App</h1>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search for meals..." 
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<PopularDishes searchResults={searchResults} />} />
            <Route path="/meal/:id" element={<MealDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;