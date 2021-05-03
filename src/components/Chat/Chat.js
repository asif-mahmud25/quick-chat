import React from "react";
import style from "./Chat.module.css";

const Chat = () => {
  return (
    <div className={style.chat}>
      <h1>Dev Room</h1>
      <div className={style.chatBox}></div>
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
