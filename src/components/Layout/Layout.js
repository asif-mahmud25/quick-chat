import React, { useContext } from "react";
import Chat from "../Chat/Chat";
import Login from "../Login/Login";
import Sidebar from "../Sidebar/Sidebar";
import style from "./Layout.module.css";
import { AppContext } from "../../AppContext";

const Layout = () => {
  const [user, setUser] = useContext(AppContext);

  let display = <Login />;

  if (user.uid !== null) {
    display = (
      <React.Fragment>
        <div className={style.sidebarContainer}>
          <Sidebar />
        </div>
        <div className={style.chatContainer}>
          <Chat />
        </div>
      </React.Fragment>
    );
  }

  return <div className={style.layout}>{display}</div>;
};

export default Layout;
