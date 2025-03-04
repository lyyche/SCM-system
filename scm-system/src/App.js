import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Orders from "./pages/Orders";
import Suppliers from "./pages/Suppliers";
import "./styles.css";  // Import global styles

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/suppliers" element={<Suppliers />} />
      </Routes>
    </Router>
  );
};

export default App;
