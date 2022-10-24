import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
const PageNotFound = () => {
  return (
    <div className="errrorpage">
      <h1>Be like you don miss road</h1>
      <p>check links to find your way</p>
      <ul className="errlist">
        <li className="list">
          <Link to="/">Home</Link>
        </li>
        <li className="list">
          <Link to="/user">User</Link>
        </li>
        <li className="list">
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </div>
  );
};

export default PageNotFound;
