import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const menuItems = [
    { icon: "/assets/images/menu/dashboard.svg", label: "Dashboard", active: true },

    { icon: "/assets/images/menu/delivery.svg", label: "Food Order", active: false },
    { icon: "/assets/images/menu/reviewmenu.svg", label: "Favorite", active: false },
    { icon: "/assets/images/menu/orderDis.svg", label: "Message", active: false },
    { icon: "/assets/images/menu/foodDev.svg", label: "Order History", active: false },
    { icon: "/assets/images/menu/billmenu.svg", label: "Bills", active: false },
    { icon: "/assets/images/menu/settingsmenu.svg", label: "Setting", active: false },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <h2>
          Go Meal<span>.</span>
        </h2>
      </div>
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`menu-item ${item.active ? "active" : ""}`}
          >
            {item.icon && (
              <img src={item.icon} alt={item.label} className="icon" />
            )}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <div className="upgrade-card">
        <p>Upgrade your account to get free discount</p>
        <button className="upgrade-btn">Upgrade</button>
        <img src="/assets/images/cardDots.svg" className="card-dots"/>
        <img src="/assets/images/cardGradient.svg" className="card-gradient"/>
      </div>
    </div>
  );
};

export default Sidebar;
