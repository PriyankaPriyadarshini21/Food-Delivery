import React, { useState, useEffect } from "react";
import Header from "../Layout/Header";
import Banner from "./Banner";
import Category from "./Category";
import PopularDishes from "./PopularDishes";
import RecentOrders from "./RecentOrders";
import "./Dashboard.css";

const Dashboard = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchActive, setSearchActive] = useState(false);

  return (
    <div className="main-content">
      <Header
        onSearchResults={(data) => {
          setSearchResults(data);
          setSearchActive(data.length > 0);
        }}
        onClearSearch={() => setSearchActive(false)}
      />

      <div className="dashboard-container">
        <Banner />
        <Category />
        <PopularDishes searchResults={searchActive ? searchResults : null} />
        <RecentOrders />
      </div>
    </div>
  );
};

export default Dashboard;
