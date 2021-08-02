import React, { useContext, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import { AppContext } from "./AppContext";
import { ModalContextProvider } from "./ModalContext";
import { BrowserRouter } from "react-router-dom";

//firebase auth
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useContext(AppContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log("Logged in...");

        let userData = {
          uid: authUser.uid,
          name: authUser.displayName,
          photo: authUser.photoURL,
          email: authUser.email,
        };

        //Setting user info to local storage
        localStorage.setItem("user", JSON.stringify(userData));

        //Setting the state to have user data
        setUser(userData);
      } else {
        console.log("Not logged in...");

        //Remove user data from local storage
        localStorage.removeItem("user");

        //Setting the state to initial state
        setUser({
          uid: null,
          name: "",
          photo: "",
          email: "",
        });
      }
    });

    // eslint-disable-next-line
  }, []);

  let appDisplay = <Login />;

  if (user.uid) {
    appDisplay = (
      <ModalContextProvider>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </ModalContextProvider>
    );
  }

  return <div>{appDisplay}</div>;
}

export default App;
