import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./MealDetails.css";

const MealDetails = () => {
  const { idMeal } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMealDetails = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        );

        if (res.data.meals && res.data.meals.length > 0) {
          setMeal(res.data.meals[0]);
        } else {
          setError("Meal not found");
        }
      } catch (err) {
        console.error("Error fetching meal details:", err);
        setError("Failed to load meal details");
      } finally {
        setLoading(false);
      }
    };

    fetchMealDetails();
  }, [idMeal]);

  const getIngredientsList = () => {
    if (!meal) return [];

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient && ingredient.trim() !== "") {
        ingredients.push({
          name: ingredient,
          measure: measure || "",
        });
      }
    }
    return ingredients;
  };

  if (loading) return <div className="loading">Loading meal details...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!meal) return <div className="error">Meal not found</div>;

  const ingredients = getIngredientsList();

  return (
    <div className="meal-details-container">
      <div className="back-nav">
        <Link to="/" className="back-button">
          &larr; Back to Dishes
        </Link>
      </div>

      <div className="meal-header">
        <div className="meal-image-wrapper">
          <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image" />
          <div className="discount-tag">15% Off</div>
        </div>

        <div className="meal-info">
          <div className="meal-rating">★★★★★</div>
          <h1 className="meal-title">{meal.strMeal}</h1>

          <div className="meal-metadata">
            <div className="metadata-item">
              <span className="metadata-label">Category:</span> {meal.strCategory}
            </div>
            <div className="metadata-item">
              <span className="metadata-label">Origin:</span> {meal.strArea}
            </div>
            {meal.strTags && (
              <div className="metadata-item">
                <span className="metadata-label">Tags:</span>{" "}
                {meal.strTags.replace(/,/g, ", ")}
              </div>
            )}
          </div>

          <div className="meal-price-action">
            <div className="meal-price">
              <span className="currency">$</span>5.99
            </div>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="meal-content">
        <div className="ingredients-section">
          <h2>Ingredients</h2>
          <ul className="ingredients-list">
            {ingredients.map((item, index) => (
              <li key={index} className="ingredient-item">
                <span className="ingredient-name">{item.name}</span>
                <span className="ingredient-measure">{item.measure}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="instructions-section">
          <h2>Instructions</h2>
          <div className="instructions-text">
            {meal.strInstructions.split(/\r\n|\n/).map(
              (paragraph, index) =>
                paragraph.trim() && <p key={index}>{paragraph}</p>
            )}
          </div>
        </div>
      </div>

      {meal.strYoutube && (
        <div className="video-section">
          <h2>Watch Video</h2>
          <div className="video-container">
            <iframe
              width="100%"
              height="480"
              src={`https://www.youtube.com/embed/${meal.strYoutube.split("v=")[1]}`}
              title={`How to make ${meal.strMeal}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealDetails;
