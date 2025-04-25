import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Header.css";

const Header = ({ onSearchResults, onClearSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("name");
  const [categoryList, setCategoryList] = useState([]);
  const [areaList, setAreaList] = useState([]);
  const [ingredientList, setIngredientList] = useState([]);

  useEffect(() => {
    async function fetchFilterLists() {
      try {
        const [catRes, areaRes, ingRes] = await Promise.all([
          axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list"),
          axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list"),
          axios.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list"),
        ]);
        setCategoryList(catRes.data.categories || []);
        setAreaList(areaRes.data.meals || []);
        setIngredientList(ingRes.data.meals || []);
      } catch (err) {
        console.error("Failed to fetch filter lists", err);
      }
    }
    fetchFilterLists();
  }, []);

  // API fetch functions
  const fetchByName = (term) =>
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => res.data);

  const fetchByFirstLetter = (term) =>
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${term[0]}`)
      .then((res) => res.data);

  const fetchByCategory = (term) =>
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${term}`)
      .then((res) => res.data);

  const fetchByArea = (term) =>
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${term}`)
      .then((res) => res.data);

  const fetchByIngredient = (term) =>
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${term}`)
      .then((res) => res.data);

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      const trimmed = searchTerm.trim();
      if (!trimmed) {
        onClearSearch();
        return;
      }

      try {
        const [
          nameResult,
          letterResult,
          categoryResult,
          areaResult,
          ingredientResult,
        ] = await Promise.all([
          fetchByName(trimmed),
          fetchByFirstLetter(trimmed),
          fetchByCategory(trimmed),
          fetchByArea(trimmed),
          fetchByIngredient(trimmed),
        ]);

        let selectedMeals = [];
        switch (searchType) {
          case "name":
            selectedMeals = nameResult.meals || [];
            break;
          case "firstLetter":
            selectedMeals = letterResult.meals || [];
            break;
          case "category":
            selectedMeals = categoryResult.meals || [];
            break;
          case "area":
            selectedMeals = areaResult.meals || [];
            break;
          case "ingredient":
            selectedMeals = ingredientResult.meals || [];
            break;
          default:
            selectedMeals = [];
        }

        onSearchResults(selectedMeals);
       
      } catch (err) {
        console.error("Search error:", err);
        onSearchResults([]);
      }
    }
  };

  return (
    <div className="header">
      <div className="greeting">
        <h2>Hello, Patricia</h2>
      </div>
      <div className="header-content">
        <div className="search-container">
          <img
            src="/assets/images/magnifier.png"
            alt="Search"
            className="search-image-icon"
          />

          <input
            type="text"
            placeholder="Search meals..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
          />

          <select
            className="search-dropdown"
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
          >
            <option value="name">By Name</option>
            <option value="firstLetter">By First Letter</option>
            <option value="category">By Category</option>
            <option value="area">By Area</option>
            <option value="ingredient">By Ingredient</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
