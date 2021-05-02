import React from "react";
import style from "./Login.module.css";
import primaryLogo from "../../assets/primary-logo.svg";
import topSideArt from "../../assets/top-login-art.svg";
import bottomSideArt from "../../assets/bottom-login-art.svg";

const Login = () => {
  return (
    <div>
      <div>
        <img src={primaryLogo} />
        <h1>Quick Chat</h1>
        <button>Sign in with Google</button>
      </div>
      <div>
        <img src={topSideArt} />
      </div>
      <div>
        <img src={bottomSideArt} />
      </div>
    </div>
  );
};

export default Login;
