import React, { useContext, useEffect, useState } from "react";
import style from "./Sidebar.module.css";
import secondaryLogo from "../../assets/secondary-logo.svg";
import Room from "../Room/Room";
import { AppContext } from "../../AppContext";
import { auth, db } from "../../firebase";
import { ModalContext } from "../../ModalContext";

const Sidebar = () => {
  const [user, setUser] = useContext(AppContext);

  const [rooms, setRooms] = useState([]);

  //For modal state
  const [roomModal, setRoomModal, logoutModal, setLogoutModal] = useContext(
    ModalContext
  );

  //Attaching firebase realtime db listener
  useEffect(() => {
    const unsubscribe = db
      .collection("rooms")
      .orderBy("name", "asc")
      .onSnapshot((snapshot) => {
        let roomData = snapshot.docs.map((el) => {
          return {
            id: el.id,
            data: el.data(),
          };
        });

        setRooms(roomData);
        console.log(roomData);
      });

    return () => {
      unsubscribe();
    };
  }, []);

  //Rooms with data from firebase db
  let roomsDisplay = rooms.map((el) => {
    return <Room key={el.id} id={el.id} name={el.data.name} />;
  });

  //Logout funtion
  const logout = () => {
    // auth.signOut();
    // //Setting the state to initial state
    // setUser({
    //   uid: null,
    //   name: "",
    //   photo: "",
    //   email: "",
    // });
    // //Remove user data from session storage
    // sessionStorage.removeItem("user");

    setLogoutModal(true);
  };

  //Add room modal appear
  const addRoom = () => {
    setRoomModal(true);
  };

  return (
    <div className={style.sidebar}>
      <div className={style.logo}>
        <img src={secondaryLogo} alt="" />
        <h1>Quick Chat</h1>
      </div>
      <div className={style.userSection}>
        <div className={style.userInfo}>
          <img src={user.photo} alt="User Image" />
          <h1>{user.name}</h1>
          <p onClick={logout}>Logout</p>
        </div>
      </div>
      <h1 className={style.addRoom} onClick={addRoom}>
        Add New Room
      </h1>
      <div className={style.roomContainer}>{roomsDisplay}</div>
    </div>
  );
};

export default Sidebar;
