import React from "react";
import { Link } from 'react-router-dom'
import "../assets/sideNav.css";

function SideNav() {
  return (
    <div className="py-2 sticky-top flex-grow-1">
    <div className="nav flex-sm-column">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </nav>
    </div>
    </div>
  );
}
export default SideNav;