import React, { useState } from "react";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="FlexCenter MainPage">
      <div className="FlexCenter SignInMain">
        <span className="SignInLabel SignInColor">Sign In</span>
        <input
          type="text"
          className="pa2 fw4 input-reset br3 SignIn-TextBox measure white mb4"
          placeholder="Username"
          id="Username"
        ></input>
        <input
          type="password"
          className="pa2 fw4 input-reset br3 SignIn-TextBox measure white"
          placeholder="Password"
          id="Password"
        ></input>
        <div className="mt3 FlexCenter">
          <div>
            <input type="checkbox" id="RememberMe" className="mr2" />
            <label forHtml="RememberMe" className="SignInColor">
              Remember Me
            </label>
          </div>
          <div className="ForgotPassword">
            <label className="SignInColor">Forgot password?</label>
          </div>
        </div>
        <div className="mt3 FlexCenter">
          <button className="b ph3 pv2 input-reset grow pointer f6 dib SignInButton white br3">
            SignIn
          </button>
          <button className="b ph3 pv2 input-reset grow pointer f6 dib SignInButton white br3 ml4">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
