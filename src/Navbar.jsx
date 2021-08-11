import React from "react";
import "./App.css";
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
            <li className="navbarLinks">Home</li>
            <li className="navbarLinks">Dashboard</li>
            <li className="navbarLinks">Views</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
