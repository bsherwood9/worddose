import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div>WorDose</div>
      <input type="checkbox" className="toggle" id="toggle"></input>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
      <label for="toggle" className="toggle-label">
        <span></span>
      </label>
    </header>
  );
}

export default Navbar;
