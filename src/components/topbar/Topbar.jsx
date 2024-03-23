import React, { useState } from "react";
import "./topbar.css";
import logo from "../../assets/images/logo.jpg";
import man from "../../assets/images/man.jpg";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
const Topbar = () => {
    const[notification,setNotification] =  useState(22)

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="tobarLeft">
          <span className="logo">
            <img src={logo} alt="logo" />
          </span>
        </div>
        <div className="tobarRight">
          <div className="topbarIconContainer">
            <NotificationsNoneIcon size={30} />
            <span className="notificationIcon">{notification}</span>
          </div>
          <div className="topbarIconContainer">
            <button className="helpBtn">Help</button>
          </div>
          <div className="topbarIconContainer">
            <ArrowDropDownCircleIcon size={30} />
          </div>
          <div className="topbarIconContainer">
          <div className="profileImg">
              <img src={man} alt="man" />
              <span className="name">Syed Amin</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
