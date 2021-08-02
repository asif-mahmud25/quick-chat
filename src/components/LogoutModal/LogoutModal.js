import React, { useContext } from "react";
import style from "./LogoutModal.module.css";
import { ModalContext } from "../../ModalContext";
import { auth } from "../../firebase";

const LogoutModal = () => {
  const [, , logoutModal, setLogoutModal] = useContext(ModalContext);

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
    auth
      .signOut()
      .then(() => {})
      .catch((err) => {
        console.log("log out failed!");
        console.log(err);
      });
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
