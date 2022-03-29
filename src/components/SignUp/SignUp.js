import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="FlexCenter MainPage">
      <div class="container">
        <div class="row">
          <div class="col-md-7 col-lg-6 mx-auto">
            <h3 class="login-heading mb-4">Sign In!</h3>
            <div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <div class="form-check mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="rememberPasswordCheck"
                />
                <label class="form-check-label" htmlFor="rememberPasswordCheck">
                  Remember password
                </label>
              </div>

              <div class="d-grid">
                <button class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2">
                  Sign in
                </button>
                <div class="text-center">
                  <a class="small" href="#">
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
