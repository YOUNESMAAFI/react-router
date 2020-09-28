import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const navStyle = {
  color: "#fafafa",
  textDecoration: "none",
  fontWeight: "700",
};

const Categories = ({ match }) => {
  return (
    <Router>
      <div className="categories">
        <h3>Choose a Cours</h3>
        <ul className="nav">
          <Link style={navStyle} to="/Categories/HTML">
            <li className="nav-link cat">HTML</li>
          </Link>
          <Link style={navStyle} to="/Categories/CSS">
            <li className="nav-link cat">CSS</li>
          </Link>
          <Link style={navStyle} to="/Categories/JavaScript">
            <li className="nav-link cat">JavaScript</li>
          </Link>
          <Link style={navStyle} to="/Categories/React">
            <li className="nav-link cat">React</li>
          </Link>
        </ul>
      </div>
      <div className="routed">
        <Route
          path={`${match.path}/:name`}
          render={({ match }) => (
            <div>
              <h3> {match.params.name} </h3>
            </div>
          )}
        />
      </div>
    </Router>
  );
};

export default Categories;
