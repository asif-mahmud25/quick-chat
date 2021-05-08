import React, { useContext, useEffect, useRef, useState } from "react";
import Message from "../Message/Message";
import style from "./Chat.module.css";
import { useHistory, useParams } from "react-router-dom";
import { db } from "../../firebase";
import firebase from "firebase";
import { AppContext } from "../../AppContext";

const Chat = () => {
  //States to store db data
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);

  //State to handle input message
  const [inputMsg, setInputMsg] = useState("");

  //Getting the room id from route link
  let roomId = useParams().roomId;

  //Need history to divert user when going into unwanted links
  let history = useHistory();

  //Using global context to get user data
  const [user, setUser] = useContext(AppContext);

  //To show the room name at the top
  useEffect(() => {
    if (roomId) {
      const unsubscribe = db
        .collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          //If the room exists then set the room name
          if (snapshot.exists) {
            setRoomName(snapshot.data().name);
          } else {
            //Redirect to home for unwanted urls
            history.replace("/");
          }
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
        .orderBy("timestamp", "asc")
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

  //Scroll into view the last message always
  useEffect(() => {
    scrollToLastMsg();
  }, [messages]);

  //Saving user input data to state
  const inputMsgHandler = (e) => {
    setInputMsg(e.target.value);
  };

  //Store data to the firebase db
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (inputMsg.length > 0) {
      db.collection("rooms")
        .doc(roomId)
        .get()
        .then((res) => {
          //Checking if the room exists, if exists add message
          if (res.exists) {
            db.collection("rooms").doc(roomId).collection("messages").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              message: inputMsg,
              uid: user.uid,
              name: user.name,
              photo: user.photo,
              email: user.email,
            });
          } else {
            console.log("room does not exist");
          }
        });
    }

    setInputMsg("");
  };

  //Character limit for room name
  let displayRoomName = roomName;
  if (displayRoomName.length > 44) {
    displayRoomName = displayRoomName.slice(0, 42) + "...";
  }

  //Displaying messages based on msgFrom
  let displayMessages = messages.map((el) => {
    if (el.data.email === user.email) {
      return (
        <Message
          key={el.id}
          msgFrom="user"
          msg={el.data.message}
          photo={el.data.photo}
          name={el.data.name}
          timestamp={el.data.timestamp}
        />
      );
    } else {
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
    }
  });

  //For referencing the most bottom element
  let msgEnd = useRef(null);

  //Scroll to view the last message
  const scrollToLastMsg = () => {
    if (msgEnd.current) {
      msgEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={style.chat}>
      <h1>{displayRoomName}</h1>
      <div className={style.chatBox}>
        {displayMessages}
        <div className={style.msgEnd} ref={msgEnd}></div>
      </div>
      <div className={style.inputBoxContainer}>
        <div className={style.inputBox}>
          <form onSubmit={formSubmitHandler}>
            <input
              type="text"
              placeholder="Enter your message here"
              maxLength="600"
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
