import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import style from "./Layout.module.css";

const Layout = () => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>{/* Chat component */}</div>
    </div>
  );
};

export default Layout;
