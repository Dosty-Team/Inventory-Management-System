import React from "react";
import "./style.scss"; // Import your SCSS file
import logo from "../../img/sidebar-img/vt-logo.png";

const Login = () => {
  return (
    <div className="login__container">
      <div className="login__box">
        <div className="login__logo">
          <img src={logo} alt="IMS Logo" />
          <h1>Login to your account</h1>
          <br />
          <p>Welcome back!Please enter your details</p>
        </div>
        <div className="login__inputname">Email:</div>
        <input type="text" placeholder="Email" />
        <div className="login__inputname">Password:</div>
        <input type="password" placeholder="Password" />
        <button className="login__button">Sign In</button>
      </div>
    </div>
  );
};

export default Login;
