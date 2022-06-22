import React from "react";
import "./nav.css";
import { Link } from "react-scroll/modules";
const NavBar = () => {
  return (
    <div>
      <nav className="flex align-center">
        <ul>
          <li>
            <Link to="about">
              <button> About</button>
            </Link>
            <Link to="values">
              <button>Value</button>
            </Link>
            <Link to="team">
              <button>Team</button>
            </Link>
            <Link to="home">
              <button>Home</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
