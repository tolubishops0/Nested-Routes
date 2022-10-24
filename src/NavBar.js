import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <h3 className="site-title">REACT APP</h3>

      <ul>
        <li className="nav-list">
          <Link to="/">Home</Link>
        </li>

        <li className="nav-list">
          <Link to="/user">User</Link>
        </li>

        <li className="nav-list">
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
