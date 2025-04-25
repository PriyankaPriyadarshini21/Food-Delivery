import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./PopularDishes.css";

const PopularDishes = ({ searchResults, searchLabel }) => {
  const [allMeals, setAllMeals] = useState([]);

  useEffect(() => {
    const fetchAllMeals = async () => {
      const letters = "abcdefghijklmnopqrstuvwxyz".split("");
      let all = [];

      for (let letter of letters) {
        try {
          const res = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
          );
          if (res.data.meals) all = [...all, ...res.data.meals];
        } catch (error) {
          console.error(`Error fetching meals for letter "${letter}":`, error);
        }
      }

      setAllMeals(all);
    };

    fetchAllMeals();
  }, []);

  const dishes = searchResults || allMeals;

  return (
    <div className="popular-dishes">
      <div className="section-header">
        <h3>{searchLabel || "Popular Dishes"}</h3>
        <button className="view-all">View all</button>
      </div>

      <div className="dishes-container">
        {dishes.map((dish) => (
          <Link to={`/meal/${dish.idMeal}`} className="dish-link" key={dish.idMeal}>
            <div className="dish-card">
              <div className="discount-tag">15% Off</div>


              <img
                src={dish.strMealThumb}
                alt={dish.strMeal}
                className="dish-image"
              />
              <div className="dish-rating">★★★★★</div>
              <h4 className="dish-name">{dish.strMeal}</h4>
              <div className="dish-bottom">
                <div className="dish-price">
                  <span className="currency">$</span>5.99
                </div>
                <button className="add-btn" onClick={(e) => e.stopPropagation()}>+</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularDishes;
