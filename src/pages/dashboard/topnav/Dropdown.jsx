import { Avatar } from "@material-ui/core";
import React, { useContext } from "react";
import "../../../App.css";
import { userName, varCtx } from "../../../shared";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export default function Dropdown(props) {
  const history = useHistory();
  const [active, setActive] = useState(false);
  const { setAuth } = useContext(varCtx);
  const logout = () => {
    setAuth(false);
    Cookies.remove("--t");
    history.push("/");
  };
  const handleClick = () => {
    logout();
  };
  return (
    <div className="dropdown">
      {props.children === "avatar" ? (
        <>
          <Avatar
            className="topNavRightAvatar"
            onClick={() => setActive((on) => !on)}
          >
            {userName[0]}
          </Avatar>
          <div className={`dropdownContent ${active ? "active" : null}`}>
            <ul className="dropdownContentList">
              <li>
                <i className="fa fa-user" aria-hidden="true"></i>Profile
              </li>
              <li onClick={handleClick}>
                <i className="fa fa-sign-out" aria-hidden="true"></i>Log out
              </li>
            </ul>
          </div>
        </>
      ) : (
        userName
      )}
    </div>
  );
}
