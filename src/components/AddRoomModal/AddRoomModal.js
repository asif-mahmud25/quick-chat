import React, { useContext, useState } from "react";
import style from "./AddRoomModal.module.css";
import { ModalContext } from "../../ModalContext";
import closeIcon from "../../assets/close-icon.svg";
import { db } from "../../firebase";

const AddRoomModal = () => {
  const [roomModal, setRoomModal] = useContext(ModalContext);

  const [roomName, setRoomName] = useState("");

  let modalStyle = style.modalBgHide;

  if (roomModal === true) {
    modalStyle = style.modalBgShow;
  }

  const closeModal = () => {
    setRoomModal(false);
    setRoomName("");
  };

  const inputChageHandler = (e) => {
    setRoomName(e.target.value);
  };

  //Adding the room in the firebase db
  const addRoom = () => {
    if (roomName.length > 0) {
      db.collection("rooms").add({
        name: roomName,
      });

      setRoomModal(false);
      setRoomName("");
    }
  };

  return (
    <div className={modalStyle}>
      <div className={style.modal}>
        <h2>Add a new chat room</h2>
        <input
          type="text"
          placeholder="Enter room name"
          maxLength="60"
          value={roomName}
          onChange={inputChageHandler}
        />
        <button onClick={addRoom}>Add Room</button>
        <img src={closeIcon} alt="close" onClick={closeModal} />
      </div>
    </div>
  );
};

export default AddRoomModal;
