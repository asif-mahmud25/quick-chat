import React from "react";
import style from "./Room.module.css";
import roomIcon from "../../assets/room-icon.svg";
import { Link } from "react-router-dom";

const Room = (props) => {
  let roomName = props.name;

  //Character limit for room names
  if (roomName.length > 20) {
    roomName = roomName.slice(0, 17) + "...";
  }

  return (
    <Link to={`/room/${props.id}`} className={style.links}>
      <div className={style.room}>
        <img src={roomIcon} alt="" />
        <div>
          <h2>{roomName}</h2>
          <p>Active at: 12:30pm, 21Mar</p>
        </div>
      </div>
    </Link>
  );
};

export default Room;
