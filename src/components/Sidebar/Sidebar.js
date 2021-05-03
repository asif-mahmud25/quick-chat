import React from "react";
import style from "./Sidebar.module.css";
import secondaryLogo from "../../assets/secondary-logo.svg";
import userImg from "../../assets/room-icon.svg";

const Sidebar = () => {
  return (
    <div>
      <div>
        <img src={secondaryLogo} alt="" />
        <h1>Quick Chat</h1>
      </div>
      <div>
        <img src={userImg} alt="User Image" />
        <h1>Asif Mahmud</h1>
        <p>Logout</p>
      </div>
      <h1>Add New Room</h1>
      <div>{/* room component */}</div>
    </div>
  );
};

export default Sidebar;
