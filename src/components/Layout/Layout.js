import React from "react";
import AddRoomModal from "../AddRoomModal/AddRoomModal";
import Chat from "../Chat/Chat";
import Sidebar from "../Sidebar/Sidebar";
import style from "./Layout.module.css";
import { Route, Switch, Redirect } from "react-router-dom";

const Layout = () => {
  return (
    <div className={style.layout}>
      <AddRoomModal />
      <div className={style.sidebarContainer}>
        <Sidebar />
      </div>
      <div className={style.chatContainer}>
        <Switch>
          <Route path="/room/:roomId" component={Chat} />
          <Redirect to="/room/NwNZZAWqerFg3v3LhMec" />
        </Switch>
      </div>
    </div>
  );
};

export default Layout;
