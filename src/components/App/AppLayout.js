import React, { useState, useEffect } from "react";

//Layouts
//SideBars
import Sidebar from "../Layout/Sidebar";
import OrderMenu from "../RightMenu/RightMenu";

//Dashboard
import Dashboard from "../Dashboard/Dashboard";
import "./AppLayout.css";

const AppLayout = () => {
  return (
    <div className="main-layout">
      <Sidebar />
      <Dashboard />
      <OrderMenu />
    </div>
  );
};

export default AppLayout;
