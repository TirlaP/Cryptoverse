import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

// Instead of imorting every single component one by one create
// an index.js file in 'components' folder and import from there
import { Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main"></div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
