import React, { useContext } from "react";
import style from "./LogoutModal.module.css";
import { ModalContext } from "../../ModalContext";
import { AppContext } from "../../AppContext";
import { auth } from "../../firebase";

const LogoutModal = () => {
  const [, , logoutModal, setLogoutModal] = useContext(ModalContext);

  const [user, setUser] = useContext(AppContext);

  let modalStyle = style.modalBgHide;

  if (logoutModal) {
    modalStyle = style.modalBgShow;
  }

  //Cancel logout
  const closeModal = () => {
    setLogoutModal(false);
  };

  //Logout the user
  const logoutUser = () => {
    auth.signOut();

    //Setting the state to initial state
    setUser({
      uid: null,
      name: "",
      photo: "",
      email: "",
    });

    //Close the logout modal
    setLogoutModal(false);

    //Remove user data from session storage
    sessionStorage.removeItem("user");
  };

  return (
    <div className={modalStyle}>
      <div className={style.modal}>
        <h2>Do you want to log out?</h2>
        <button className={style.logoutBtn} onClick={logoutUser}>
          Yes, Logout
        </button>
        <button className={style.cancelBtn} onClick={closeModal}>
          No, Go Back
        </button>
      </div>
    </div>
  );
};

export default LogoutModal;