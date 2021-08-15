import React from "react";
import "../../../App.css";
import Dropdown from "./Dropdown";

export default function Topnav() {
  return (
    <div className="topNav">
      <div className="topNavRight">
        <div className="topNavRightItem">
          <Dropdown children="avatar" />
        </div>
        <div className="topNavRightItem">
          <Dropdown />
        </div>
      </div>
    </div>
  );
}
