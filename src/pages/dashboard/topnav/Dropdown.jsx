import { Avatar, Badge, IconButton, Popover } from "@material-ui/core";
import { ExitToApp, Notifications, PersonRounded } from "@material-ui/icons";
import React, { useContext } from "react";
import { createRef } from "react";
import { Link } from "react-router-dom";
import "../../../App.css";
import { varCtx } from "../../../shared";

export default function Dropdown(props) {
  const { auth, setAuth } = useContext(varCtx);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    setAuth(false);
  };
  let anchorRef = createRef();
  const open = Boolean(anchorEl);
  return (
    <div className="dropdown">
      {props.children === "avatar" ? (
        <>
          <Avatar className="topNavRightAvatar" onClick={handleClick}></Avatar>
        </>
      ) : (
        <IconButton disableRipple className="topNavRightButton">
          <Badge
            style={{ color: "#455560" }}
            badgeContent={4}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Notifications fontSize="medium" color="secondary" />
          </Badge>
        </IconButton>
      )}
      <Popover
        ref={anchorRef}
        PaperProps={{ className: "popover" }}
        className="popoverClass"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transitionDuration="auto"
      >
        {props.children === "avatar" ? (
          <ul className="topNavRightPopup">
            <li>
              <PersonRounded color="secondary" fontSize="inherit" />
              Profile
            </li>
            <li>
              <ExitToApp color="secondary" fontSize="inherit" />
              Logout
            </li>
          </ul>
        ) : null}
      </Popover>
    </div>
  );
}
