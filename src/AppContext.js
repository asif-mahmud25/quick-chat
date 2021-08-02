import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  let initialState = {
    uid: null,
    name: "",
    photo: "",
    email: "",
  };

  //Getting user info from localStorage
  if (localStorage.getItem("user")) {
    let data = localStorage.getItem("user");
    let userData = JSON.parse(data);
    initialState = userData;
  } else {
    console.log("no user data");
  }

  const [user, setUser] = useState(initialState);

  return (
    <AppContext.Provider value={[user, setUser]}>
      {props.children}
    </AppContext.Provider>
  );
};
