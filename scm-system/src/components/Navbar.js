import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Dashboard</Link></li>
      <li><Link to="/inventory">Inventory</Link></li>
      <li><Link to="/orders">Orders</Link></li>
      <li><Link to="/suppliers">Suppliers</Link></li>
    </ul>
  </nav>
);

export default Navbar;
