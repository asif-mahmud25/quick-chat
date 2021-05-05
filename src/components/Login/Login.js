import React from "react";
import style from "./Login.module.css";
import primaryLogo from "../../assets/primary-logo.svg";
import topSideArt from "../../assets/top-login-art.svg";
import bottomSideArt from "../../assets/bottom-login-art.svg";
import { auth, provider } from "../../firebase";

const Login = () => {
  const login = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => console.log(res.user.displayName))
      .catch((err) => console.log(err));
  };

  return (
    <div className={style.login}>
      <div className={style.loginMain}>
        <img src={primaryLogo} alt="" />
        <h1>Quick Chat</h1>
        <button className={style.ripple} onClick={login}>
          Sign in with Google
        </button>
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
