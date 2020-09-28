import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Ai from "./Products/Ai";

//Componenets
import FullStackJs from "./Products/FullStackJs";
import GameDev from "./Products/GameDev";
import UiUx from "./Products/UiUx";

const navStyle = {
  color: "#fafafa",
  textDecoration: "none",
  fontWeight: "700",
};

const Products = () => {
  return (
    <Router>
      <div className="products">
        <div className="products-list">
          <h2>View our products</h2>
          <ul>
            <Link style={navStyle} to="/Products/FullStackJs">
              <li>Full Stack JS</li>
            </Link>
            <Link style={navStyle} to="/Products/UiUx">
              <li>Ui/ux Design</li>
            </Link>
            <Link style={navStyle} to="/Products/Ai">
              <li>AI</li>
            </Link>
            <Link style={navStyle} to="/Products/GameDev">
              <li>Game Dev</li>
            </Link>
          </ul>
        </div>
        <div className="productsDisplay">
          <Route
            path="/Products/"
            exact
            render={() => (
              <div>
                <h3> Choose a Product </h3>
              </div>
            )}
          ></Route>
          <Route path="/products/FullStackJs" component={FullStackJs}></Route>
          <Route path="/products/UiUx" component={UiUx}></Route>
          <Route path="/products/Ai" component={Ai}></Route>
          <Route path="/products/GameDev" component={GameDev}></Route>
        </div>
      </div>
    </Router>
  );
};

export default Products;
