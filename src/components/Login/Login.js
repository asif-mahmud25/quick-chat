import React from "react";
import style from "./Login.module.css";
import primaryLogo from "../../assets/primary-logo.svg";
import topSideArt from "../../assets/top-login-art.svg";
import bottomSideArt from "../../assets/bottom-login-art.svg";

const Login = () => {
  return (
    <div className={style.login}>
      <div className={style.loginMain}>
        <img src={primaryLogo} />
        <h1>Quick Chat</h1>
        <button className={style.ripple}>Sign in with Google</button>
      </div>
      <div className={style.decorationTop}>
        <img src={topSideArt} />
      </div>
      <div className={style.decorationBottom}>
        <img src={bottomSideArt} />
      </div>
    </div>
  );
};

export default Login;
