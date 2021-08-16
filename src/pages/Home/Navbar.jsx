import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { Logo } from "../../shared";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <Logo />
        </div>
        <div className="navbarRight">
          <ul className="navbarList">
            <li className="navbarLinks">
              <Link to="/">Home</Link>
            </li>

            <li className="navbarLinks">
              <Link to="/dash/home">Dashboard</Link>
            </li>
            <li className="navbarLinks">
              <Link to="#footer">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
