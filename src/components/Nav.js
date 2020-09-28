import React from "react";
import { Link } from "react-router-dom";

const navStyle = {
  color: "#fafafa",
  textDecoration: "none",
  fontWeight: "700",
};

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Code Academy</div>
      <ul className="nav">
        <Link style={navStyle} to="/">
          <li className="nav-links">Home</li>
        </Link>
        <Link style={navStyle} to="/categories">
          <li className="nav-links">Category</li>
        </Link>
        <Link style={navStyle} to="/products">
          <li className="nav-links">Products</li>
        </Link>
        <Link style={navStyle} to="/">
          <li className="nav-links">Admin Area</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
