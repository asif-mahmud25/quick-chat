import React from "react";
import Chat from "../Chat/Chat";
import Login from "../Login/Login";
import Sidebar from "../Sidebar/Sidebar";
import style from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={style.layout}>
      {/* <div className={style.sidebarContainer}>
        <Sidebar />
      </div>
      <div className={style.chatContainer}>
        <Chat />
      </div> */}

      <Login />
    </div>
  );
};

export default Layout;
