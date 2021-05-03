import React from "react";
import style from "./Sidebar.module.css";
import secondaryLogo from "../../assets/secondary-logo.svg";
import userImg from "../../assets/room-icon.svg";
import Room from "../Room/Room";

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <div className={style.logo}>
        <img src={secondaryLogo} alt="" />
        <h1>Quick Chat</h1>
      </div>
      <div className={style.userSection}>
        <div className={style.userInfo}>
          <img src={userImg} alt="User Image" />
          <h1>Asif Mahmud</h1>
          <p>Logout</p>
        </div>
      </div>
      <h1 className={style.addRoom}>Add New Room</h1>
      <div>
        <Room />
        <Room />
        <Room />
        <Room />
      </div>
    </div>
  );
};

export default Sidebar;
