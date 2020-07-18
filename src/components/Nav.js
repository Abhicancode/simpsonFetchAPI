import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "#fff",
  };
  return (
    <nav>
      <h3>
        {" "}
        <span>
          <small>just another</small>
        </span>
        Logo
      </h3>

      <ul className="nav-links">
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/shop">
          <li>Simpsons</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
