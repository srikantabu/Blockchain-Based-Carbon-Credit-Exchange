import React, { useState } from "react";
import "./SignIn.css";

const SignIn = () => {
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
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>

              <div class="form-check mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="rememberPasswordCheck"
                />
                <label class="form-check-label" for="rememberPasswordCheck">
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

// const SignIn = () => {
//   return (
//     <div className="FlexCenter MainPage">
//       <div className="FlexCenter SignInMain">
//         <span className="SignInLabel SignInColor">Sign In</span>
//         <input
//           type="text"
//           className="pa2 fw4 input-reset br3 SignIn-TextBox measure white mb4"
//           placeholder="Username"
//           id="Username"
//         ></input>
//         <input
//           type="password"
//           className="pa2 fw4 input-reset br3 SignIn-TextBox measure white"
//           placeholder="Password"
//           id="Password"
//         ></input>
//         <div className="mt3 FlexCenter">
//           <div>
//             <input type="checkbox" id="RememberMe" className="mr2" />
//             <label forHtml="RememberMe" className="SignInColor">
//               Remember Me
//             </label>
//           </div>
//           <div className="ForgotPassword">
//             <label className="SignInColor">Forgot password?</label>
//           </div>
//         </div>
//         <div className="mt3 FlexCenter">
//           <button className="b ph3 pv2 input-reset grow pointer f6 dib SignInButton white br3">
//             SignIn
//           </button>
//           <button className="b ph3 pv2 input-reset grow pointer f6 dib SignInButton white br3 ml4">
//             Register
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

export default SignIn;
