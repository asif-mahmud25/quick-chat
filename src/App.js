import React, { useContext } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import { AppContext } from "./AppContext";

function App() {
  const [user, setUser] = useContext(AppContext);

  let appDisplay = <Login />;

  if (user.uid) {
    appDisplay = <Layout />;
  }

  return <div>{appDisplay}</div>;
}

export default App;
