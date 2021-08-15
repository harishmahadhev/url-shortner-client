import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <div className="navbarLogo">
            <span>HA</span>
            <span>SH</span>
          </div>
        </div>
        <div className="navbarRight">
          <ul className="navbarList">
            <li className="navbarLinks">
              <Link to="/">Home</Link>
            </li>

            <li className="navbarLinks">
              <Link to="/dash/home">Dashboard</Link>
            </li>
            <li className="navbarLinks">About</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
