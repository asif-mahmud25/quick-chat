import React, { useEffect, useState } from "react";
import style from "./Room.module.css";
import roomIcon from "../../assets/room-icon.svg";
import { Link } from "react-router-dom";
import { db } from "../../firebase";

const Room = (props) => {
  let roomName = props.name;

  //Character limit for room names
  if (roomName.length > 22) {
    roomName = roomName.slice(0, 20) + "...";
  }

  let id = props.id;

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("rooms")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        let data = snapshot.docs.map((el) => el.data());
        setMessages(data);
      });

    return () => {
      unsubscribe();
    };
  }, [id]);

  //Getting the last message
  let lastMsg = "Last message...";
  if (messages.length > 0) {
    lastMsg = messages[0].message;

    //Character limit set for sidebar last message
    if (lastMsg.length > 24) {
      lastMsg = lastMsg.slice(0, 22) + "...";
    }
  }

  return (
    <Link to={`/room/${props.id}`} className={style.links}>
      <div className={style.room}>
        <img src={roomIcon} alt="" />
        <div>
          <h2>{roomName}</h2>
          <p>{lastMsg}</p>
        </div>
      </div>
    </Link>
  );
};

export default Room;
