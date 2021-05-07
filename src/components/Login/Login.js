import React, { useContext } from "react";
import style from "./Login.module.css";
import primaryLogo from "../../assets/primary-logo.svg";
import topSideArt from "../../assets/top-login-art.svg";
import bottomSideArt from "../../assets/bottom-login-art.svg";
import { auth, provider } from "../../firebase";
import { AppContext } from "../../AppContext";

const Login = () => {
  const [user, setUser] = useContext(AppContext);

  const userLogin = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        console.log("logged in");

        let userData = {
          uid: res.user.uid,
          name: res.user.displayName,
          photo: res.user.photoURL,
          email: res.user.email,
        };

        //Setting user info to sessionStorage
        sessionStorage.setItem("user", JSON.stringify(userData));

        //Setting the state to have user data
        setUser(userData);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={style.login}>
      <div className={style.loginMain}>
        <img src={primaryLogo} alt="" />
        <h1>Quick Chat</h1>
        <button className={style.ripple} onClick={userLogin}>
          Sign in with Google
        </button>
        <p>Designed and developed by Asif Mahmud</p>
      </div>
      <div className={style.decorationTop}>
        <img src={topSideArt} alt="" />
      </div>
      <div className={style.decorationBottom}>
        <img src={bottomSideArt} alt="" />
      </div>
    </div>
  );
};

export default Login;
