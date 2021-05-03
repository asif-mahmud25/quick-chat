import React from "react";
import style from "./Message.module.css";
import userIcon from "../../assets/room-icon.svg";

const Message = (props) => {
  let messageContainer = style.messageContainer;
  let messageTxtWrapper = style.messageTxtWrapper;
  let senderName = style.senderName;
  let messageTxt = style.messageTxt;
  let timeStamp = style.timeStamp;

  if (props.msgFrom === "user") {
    messageContainer = style.messageContainerUser;
    messageTxtWrapper = style.messageTxtWrapperUser;
    senderName = style.senderNameUser;
    messageTxt = style.messageTxtUser;
    timeStamp = style.timeStampUser;
  }

  return (
    <div className={messageContainer}>
      <img src={userIcon} alt="" />
      <div>
        <div className={messageTxtWrapper}>
          <p className={senderName}>Sayem Hasan</p>
          <p className={messageTxt}>
            Es un hecho establecido hace demasiado tiempo que un lector se
            distraerá con el contenido
          </p>
          <p className={timeStamp}>12:30pm, 21 Mar</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
