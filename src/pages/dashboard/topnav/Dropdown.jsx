import { Avatar } from "@material-ui/core";
import React, { useContext } from "react";
import "../../../App.css";
import { userName, varCtx } from "../../../shared";
import { useRef } from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
const clickOutsideRef = (content_ref, toggle_ref) => {
  document.addEventListener("mousedown", (e) => {
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle("active");
    } else {
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove("active");
      }
    }
  });
};

export default function Dropdown(props) {
  const history = useHistory();
  const { setAuth } = useContext(varCtx);
  const logout = () => {
    setAuth(false);
    Cookies.remove("--t");
    history.push("/");
  };
  const dropdownToggle = useRef(null);
  const dropdownContent_el = useRef(null);
  clickOutsideRef(dropdownContent_el, dropdownToggle);
  const handleClick = () => {
    logout();
  };

  return (
    <div className="dropdown">
      {props.children === "avatar" ? (
        <>
          <Avatar ref={dropdownToggle} className="topNavRightAvatar">
            {userName[0]}
          </Avatar>
          <div ref={dropdownContent_el} className="dropdownContent">
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
