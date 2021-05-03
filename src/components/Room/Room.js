import React from "react";
import style from "./Room.module.css";
import roomIcon from "../../assets/room-icon.svg";

const Room = () => {
  return (
    <div>
      <img src={roomIcon} alt="" />
      <h2>Dev Room</h2>
      <p>Last active: 12:30pm, 21Mar</p>
    </div>
  );
};

export default Room;
