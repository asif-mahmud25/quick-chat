import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [user, setUser] = useState({
    uid: null,
    name: "",
    photo: "",
    email: "",
  });

  return (
    <AppContext.Provider value={[user, setUser]}>
      {props.children}
    </AppContext.Provider>
  );
};
