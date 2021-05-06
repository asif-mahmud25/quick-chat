import React, { useContext } from "react";
import style from "./AddRoomModal.module.css";
import { ModalContext } from "../../ModalContext";

const AddRoomModal = () => {
  const [roomModal, setRoomModal, logoutModal, setLogoutModal] = useContext(
    ModalContext
  );

  let modalStyle = style.modalBgHide;

  if (roomModal === true) {
    modalStyle = style.modalBgShow;
  }

  return (
    <div className={modalStyle}>
      <div className={style.modal}>
        <h2>Add a new room</h2>
        <input type="text" />
        <button>Add Room</button>
        <button>Cancel</button>
      </div>
    </div>
  );
};

export default AddRoomModal;
