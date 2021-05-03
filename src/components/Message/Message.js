import React from "react";
import style from "./Message.module.css";
import userIcon from "../../assets/room-icon.svg";

const Message = () => {
  return (
    <div>
      <img src={userIcon} alt="" />
      <div>
        <p>Sayem Hasan</p>
        <div>
          <p>
            Es un hecho establecido hace demasiado tiempo que un lector se
            distraerá con el contenido
          </p>
        </div>
        <p>12:30pm, 21 Mar</p>
      </div>
    </div>
  );
};

export default Message;
