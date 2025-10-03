import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import './App.css';
import logo from './assets/mor.png'; 
import BuildB from "./page/buildb";
import BuildC from "./page/buildc";

function App() {
  return (
    <Router>
      <div>
        {/* Header: Logo + Navigation in one div */}
        <div className="header" style={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between", 
          background: "#fff", 
          padding: "0px 10px" ,
        }}>
          <img src={logo} alt="Logo" className="logo" style={{ width: "70px", height: "40px" }} />

          <nav style={{ display: "flex", gap: "20px" }}>
            <Link to="/page/buildb">
              <h5 style={{ color: "blue", margin: 0 }}>MOR</h5>
            </Link>
            <Link to="/page/buildc">
              <h5 style={{ color: "blue", margin: 0 }}>System Catalog</h5>
            </Link>
          </nav>
        </div>

        {/* Page Routes */}
        <Routes>
          {/* Default route redirects to BuildC */}
          <Route path="/" element={<Navigate to="/page/buildc" replace />} />
          <Route path="/page/buildb" element={<BuildB />} />
          <Route path="/page/buildc" element={<BuildC />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
