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
      <img src={props.photo} alt="" />
      <div>
        <div className={messageTxtWrapper}>
          <p className={senderName}>{props.name}</p>
          <p className={messageTxt}>{props.msg}</p>
          <p className={timeStamp}>
            {new Date(props.timestamp?.toDate()).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
