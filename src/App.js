import React from "react";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Categories from "./components/Categories";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav> </Nav>
        <Route className="nav-link" path="/" exact component={Home}></Route>
        <Route path="/Products" component={Products}></Route>
        <Route path="/categories" component={Categories}></Route>
      </div>
    </Router>
  );
}

export default App;
