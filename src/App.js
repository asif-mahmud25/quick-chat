import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { AppContextProvider } from "./AppContext";

function App() {
  return (
    <AppContextProvider>
      <div>
        <Layout />
      </div>
    </AppContextProvider>
  );
}

export default App;
