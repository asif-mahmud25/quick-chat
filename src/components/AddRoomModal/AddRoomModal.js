import React, { useContext } from "react";
import style from "./AddRoomModal.module.css";
import { ModalContext } from "../../ModalContext";
import closeIcon from "../../assets/close-icon.svg";

const AddRoomModal = () => {
  const [roomModal, setRoomModal, logoutModal, setLogoutModal] = useContext(
    ModalContext
  );

  let modalStyle = style.modalBgHide;

  if (roomModal === true) {
    modalStyle = style.modalBgShow;
  }

  const closeModal = () => {
    setRoomModal(false);
  };

  return (
    <div className={modalStyle}>
      <div className={style.modal}>
        <h2>Add a new chat room</h2>
        <input type="text" placeholder="Enter room name" />
        <button>Add Room</button>
        <img src={closeIcon} alt="close" onClick={closeModal} />
      </div>
    </div>
  );
};

export default AddRoomModal;
