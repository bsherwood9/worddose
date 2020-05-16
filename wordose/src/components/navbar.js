import React from "react";

function Navbar() {
  return (
    <header className="navbar">
      <div>WorDose</div>
      <input type="checkbox" className="toggle" id="toggle"></input>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">My Favorites</a>
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
