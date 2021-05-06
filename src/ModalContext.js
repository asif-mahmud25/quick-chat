import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = (props) => {
  const [roomModal, setRoomModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

  return (
    <ModalContext.Provider
      value={[roomModal, setRoomModal, logoutModal, setLogoutModal]}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
