import React, { useState } from "react";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="FlexCenter SignInMain">
      <span className="SignInLabel SignInColor">Sign In</span>
      <input
        type="text"
        className="pa2 fw4 input-reset br3 SignIn-TextBox w-20 measure white mb4"
        placeholder="Username"
        id="Username"
      ></input>
      <input
        type="password"
        className="pa2 fw4 input-reset br3 SignIn-TextBox w-20 measure white"
        placeholder="Password"
        id="Password"
      ></input>
      <div className="mt2">
        <input type="checkbox" id="RememberMe" className="mr2" />
        <label forHtml="RememberMe" className="SignInColor">
          Remember Me
        </label>
      </div>
    </div>
  );
};

export default SignIn;
