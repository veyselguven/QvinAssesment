import React from "react";
import "./nav.css";
import { Link } from "react-scroll/modules";
const NavBar = () => {
  return (
    <div>
      <nav class="flex align-center">
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
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
