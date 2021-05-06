import React, { useContext, useEffect, useState } from "react";
import Message from "../Message/Message";
import style from "./Chat.module.css";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import firebase from "firebase";
import { AppContext } from "../../AppContext";

const Chat = (props) => {
  //States to store db data
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);

  //State to handle input message
  const [inputMsg, setInputMsg] = useState("");

  //Getting the room id from route link
  let roomId = useParams().roomId;

  //Using global context to get user data
  const [user, setUser] = useContext(AppContext);

  //To show the room name at the top
  useEffect(() => {
    if (roomId) {
      const unsubscribe = db
        .collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomName(snapshot.data().name);
        });

      return () => {
        unsubscribe();
      };
    }
  }, [roomId]);

  //To get the messages in real time
  useEffect(() => {
    if (roomId) {
      const unsubscribe = db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .onSnapshot((snapshot) => {
          setMessages(
            snapshot.docs.map((el) => {
              return {
                id: el.id,
                data: el.data(),
              };
            })
          );
        });

      return () => {
        unsubscribe();
      };
    }
  }, [roomId]);

  //Saving user input data to state
  const inputMsgHandler = (e) => {
    setInputMsg(e.target.value);
  };

  //Store data to the firebase db
  const formSubmitHandler = (e) => {
    e.preventDefault();

    db.collection("rooms").doc(roomId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: inputMsg,
      uid: user.uid,
      name: user.name,
      photo: user.photo,
      email: user.email,
    });
  };

  let displayMessages = messages.map((el) => {
    return (
      <Message
        key={el.id}
        msgFrom="other"
        msg={el.data.message}
        photo={el.data.photo}
        name={el.data.name}
        timestamp={el.data.timestamp}
      />
    );
  });

  //For test purpose
  console.log(messages);

  return (
    <div className={style.chat}>
      <h1>{roomName}</h1>
      <div className={style.chatBox}>{displayMessages}</div>
      <div className={style.inputBoxContainer}>
        <div className={style.inputBox}>
          <form onSubmit={formSubmitHandler}>
            <input
              type="text"
              placeholder="Enter your message here"
              value={inputMsg}
              onChange={inputMsgHandler}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
