import React from "react";
import style from "./Room.module.css";
import roomIcon from "../../assets/room-icon.svg";

const Room = () => {
  return (
    <div className={style.room}>
      <img src={roomIcon} alt="" />
      <div>
        <h2>Dev Room</h2>
        <p>Active at: 12:30pm, 21Mar</p>
      </div>
    </div>
  );
};

export default Room;
