import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "../pages/App.css";

class Header extends Component {
  render() {
    return (
        <nav id="topNav" style={{marginBottom:'20px'}} className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="#">
            T-cusine
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
              <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
              </li>
              <li className="nav-item">
              <NavLink exact to="/about/" className="nav-link" activeClassName="active">About</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Order Now
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Menu
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    Lunch
                  </a>
                  <a className="dropdown-item" href="#">
                    Dinner
                  </a>
                  <a className="dropdown-item" href="#">
                    Cocktails
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default Header;
