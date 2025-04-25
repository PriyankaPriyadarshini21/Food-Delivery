import React from "react";
import "./Category.css";
import categories from "../../Data/Category";

const Category = () => {
  return (
    <div className="category-section">
      <div className="section-header">
        <h3>Category</h3>
        <button className="view-all">View all</button>
      </div>
      <div className="categories-container">
        {categories.map((category, index) => (
          <div className="category-item" key={index}>
            <div className="category-icon">
              <img src={category.image} alt={category.name} />
            </div>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
