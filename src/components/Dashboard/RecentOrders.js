import React, { useState } from "react";
import "./RecentOrders.css";
import RecentOrderData from "../../Data/RecentOrders";

const RecentOrders = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  return (
    <div className="recent-orders">
      <div className="section-header">
        <h3>Recent Orders</h3>
        <button className="view-all">View all</button>
      </div>

      <div className="orders-container">
        {RecentOrderData.map((dish) => {
          const isFav = favorites.includes(dish.id);
          return (
            <div className="recent-card" key={dish.id}>
              <button
                className="favorite-btn"
                onClick={() => toggleFavorite(dish.id)}
              >
                {isFav ? "❤️" : "🤍"}
              </button>
              <img src={dish.image} alt={dish.name} className="order-image" />
              <h4 className="dish-name">{dish.name}</h4>
              <div className="dish-footer">
                <div className="dish-price">
                  <span className="currency">$</span>
                  {dish.price.toFixed(2)}
                </div>
                <div className="dish-data">
                  <span>{dish.distance}</span> • <span>{dish.time}</span>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RecentOrders;
