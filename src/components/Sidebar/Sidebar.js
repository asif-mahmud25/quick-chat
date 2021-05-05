import React, { useContext } from "react";
import style from "./Sidebar.module.css";
import secondaryLogo from "../../assets/secondary-logo.svg";
import userImg from "../../assets/room-icon.svg";
import Room from "../Room/Room";
import { AppContext } from "../../AppContext";

const Sidebar = () => {
  const [user, setUser] = useContext(AppContext);

  return (
    <div className={style.sidebar}>
      <div className={style.logo}>
        <img src={secondaryLogo} alt="" />
        <h1>Quick Chat</h1>
      </div>
      <div className={style.userSection}>
        <div className={style.userInfo}>
          <img src={user.photo} alt="User Image" />
          <h1>{user.name}</h1>
          <p>Logout</p>
        </div>
      </div>
      <h1 className={style.addRoom}>Add New Room</h1>
      <div className={style.roomContainer}>
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
      </div>
    </div>
  );
};

export default Sidebar;
