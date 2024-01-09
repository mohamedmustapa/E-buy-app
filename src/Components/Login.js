import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
const Login = () => {
  return (
    <div className="box">
      <div className="login-box">
        <h3>Sign in</h3>
        <input placeholder="Email address" type="text" />
        <input placeholder="Password" type="password" />
        <p>
          {" "}
          <input type="checkbox" /> Remember password
        </p>
        <button className="signin-btn">SIGN IN</button>
        <hr />
        <button className="google-signin">
          <GoogleIcon />
          SIGN IN WITH GOOGLE
        </button>

        <button className="fb-signin">
          {" "}
          <FacebookRoundedIcon />
          SIGN IN WITH FACEBOOK
        </button>
      </div>
    </div>
  );
};

export default Login;
