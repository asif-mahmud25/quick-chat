import React, { useContext, useState } from "react";
import style from "./LogoutModal.module.css";
import { ModalContext } from "../../ModalContext";

const LogoutModal = () => {
  const [, , logoutModal, setLogoutModal] = useContext(ModalContext);

  let modalStyle = style.modalBgHide;

  if (logoutModal) {
    modalStyle = style.modalBgShow;
  }

  const closeModal = () => {
    setLogoutModal(false);
  };

  return (
    <div className={modalStyle}>
      <div className={style.modal}>
        <h2>Do you want to log out?</h2>
        <button className={style.logoutBtn}>Yes, Logout</button>
        <button className={style.cancelBtn} onClick={closeModal}>
          No, Go Back
        </button>
      </div>
    </div>
  );
};

export default LogoutModal;
