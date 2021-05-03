import React from "react";
import Message from "../Message/Message";
import style from "./Chat.module.css";

const Chat = () => {
  return (
    <div className={style.chat}>
      <h1>Dev Room</h1>
      <div className={style.chatBox}>
        <Message msgFrom="user" />
        <Message msgFrom="other" />
        <Message msgFrom="user" />
        <Message msgFrom="other" />
      </div>
      <div className={style.inputBoxContainer}>
        <div className={style.inputBox}>
          <input type="text" placeholder="Enter your message here" />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
