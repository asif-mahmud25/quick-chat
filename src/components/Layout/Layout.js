import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import style from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={style.layout}>
      <div className={style.sidebarContainer}>
        <Sidebar />
      </div>
      <div className={style.chatContainer}>
        <p>hello</p>
      </div>
    </div>
  );
};

export default Layout;
