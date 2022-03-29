import React, { useState } from "react";
import { arrCountryCode } from "./CountryCode";
import "./SignUp.css";

const SignUp = () => {
  const [txtCountry, setCountry] = useState("");
  const [txtCountryCode, setCountryCode] = useState("");
  const changeCountryHandler = (event) => {
    let countryName = event.target.value;
    let contryCode = countryName.split("(")[1].split(")")[0];
    setCountryCode(contryCode);
    setCountry(event.target.value);
  };

  return (
    <div className="FlexCenter SignUpMainPage">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-lg-6 mx-auto">
            <h3 className="login-heading mb-4">Sign Up!</h3>

            <div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="FirstName"
                  placeholder="First Name"
                />
                <label htmlFor="FirstName">First Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="LastName"
                  placeholder="Last Name"
                />
                <label htmlFor="LastName">Last Name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="ConfirmPassword"
                  placeholder="Password"
                />
                <label htmlFor="ConfirmPassword">Confirm Password</label>
              </div>

              <div className="form-floating mb-3">
                <select
                  className="form-control"
                  id="Country"
                  value={txtCountry}
                  onChange={changeCountryHandler}
                >
                  <option/>
                  {arrCountryCode.map((item) => (
                    <option>{item.name + " (" + item.dial_code + ")"}</option>
                  ))}
                </select>

                <label htmlFor="Country">Country</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="PhoneNumber"
                  placeholder="Phone Number"
                  value={txtCountryCode}
                />
                <label htmlFor="PhoneNumber">Phone Number</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="date"
                  className="form-control"
                  id="DOB"
                  placeholder="DOB"
                />
                <label htmlFor="DOB">DOB</label>
              </div>

              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="areYouAnOrganisation"
                />
                <label
                  className="form-check-label"
                  htmlFor="areYouAnOrganisation"
                >
                  Are you an organisation ?
                </label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="OrganisationName"
                  placeholder="Organisation Name"
                />
                <label htmlFor="OrganisationName">Organisation Name</label>
              </div>

              <div className="d-grid">
                <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2">
                  Register
                </button>
                <div className="text-center">
                  <a className="small" href="#">
                    Already a member?
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
