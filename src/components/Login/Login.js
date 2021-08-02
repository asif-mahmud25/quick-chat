import React, { useContext } from "react";
import style from "./Login.module.css";
import primaryLogo from "../../assets/primary-logo.svg";
import topSideArt from "../../assets/top-login-art.svg";
import bottomSideArt from "../../assets/bottom-login-art.svg";
import { auth, provider } from "../../firebase";

const Login = () => {
  const userLogin = () => {
    auth
      .signInWithPopup(provider)
      .then(() => {})
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
        <p>asifmahmud.officials@gmail.com</p>
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
