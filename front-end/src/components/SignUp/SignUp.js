import { render } from "@testing-library/react";
import React, { useState } from "react";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import { arrCountryCode } from "./CountryCode";
import "./SignUp.css";

const SignUp = () => {
  const [txtCountry, setCountry] = useState("");
  const [txtCountryCode, setCountryCode] = useState("");

  const changeCountryHandler = (event) => {
    let countryName = event.target.value;
    let contryCode = countryName.split("(")[1].split(")")[0] + " ";

    setCountryCode(contryCode);
    setCountry(event.target.value);
  };

  const [txtFirstName, setFirstName] = useState("");
  const changeFirstNameHandler = (event) => {
    setFirstName(event.target.value);
  };

  const [txtLastName, setLastName] = useState("");
  const changeLastNameHandler = (event) => {
    setLastName(event.target.value);
  };

  const [txtEmail, setEmail] = useState("");
  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const [txtPassword, setPassword] = useState("");
  const changePasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const [txtConfirmPassword, setConfirmPassword] = useState("");
  const changeConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  const [txtDOB, setDOB] = useState("");
  const changeDOBHandler = (event) => {
    setDOB(event.target.value);
  };

  const [txtOrganisationName, setOrganisationName] = useState("");
  const changeOrganisationNameHandler = (event) => {
    setOrganisationName(event.target.value);
  };

  const [chkAreYouAnOrganisation, setAreYouOrganisation] = useState(false);
  const changeAreYouOrganisationHandler = (event) => {
    setAreYouOrganisation(event.target.checked);
    setOrganisationName("");
  };

  const [txtPhoneNumber, setPhoneNumber] = useState("");
  const changePhoneNumberHandler = (event) => {
    setPhoneNumber(event.target.value);
  };

  const fnRegisterUser = async () => {
    console.log(txtFirstName);
    console.log(txtLastName);
    console.log(txtEmail);
    console.log(txtPassword);
    console.log(txtCountry.split("(")[0]);
    console.log(txtCountryCode);
    console.log(txtPhoneNumber);
    console.log(txtDOB);
    console.log(chkAreYouAnOrganisation);
    console.log(txtOrganisationName);
    fetch("http://localhost:5000/api/addusers", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({
        first_name: txtFirstName,
        last_name: txtLastName,
        email: txtEmail,
        password: txtPassword,
        country: txtCountry.split("(")[0],
        country_code: txtCountryCode,
        phone_number: txtPhoneNumber,
        dob: txtDOB,
        is_org: chkAreYouAnOrganisation,
        org_name: txtOrganisationName === "" ? null : txtOrganisationName,
      }), // body data type must match "Content-Type" header
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
                  value={txtFirstName}
                  onChange={changeFirstNameHandler}
                />
                <label htmlFor="FirstName">First Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="LastName"
                  placeholder="Last Name"
                  value={txtLastName}
                  onChange={changeLastNameHandler}
                />
                <label htmlFor="LastName">Last Name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={txtEmail}
                  onChange={changeEmailHandler}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={txtPassword}
                  onChange={changePasswordHandler}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className={
                    txtPassword === txtConfirmPassword
                      ? "form-control"
                      : "form-control WrongPassword"
                  }
                  id="ConfirmPassword"
                  placeholder="Password"
                  value={txtConfirmPassword}
                  onChange={changeConfirmPasswordHandler}
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
                  <option />
                  {arrCountryCode.map((item) => (
                    <option>{item.name + " (" + item.dial_code + ")"}</option>
                  ))}
                </select>

                <label htmlFor="Country">Country</label>
              </div>

              <div className="form-floating mb-3 FlexCenter">
                <input
                  type="text"
                  className="form-control CountryCodeTxtBox"
                  id="CountryCode"
                  value={txtCountryCode}
                  style={{ marginRight: 5 }}
                />
                <input
                  type="text"
                  className="form-control"
                  id="PhoneNumber"
                  placeholder="Phone Number"
                  value={txtPhoneNumber}
                  onChange={changePhoneNumberHandler}
                />
                <label htmlFor="PhoneNumber" style={{ paddingLeft: 90 }}>
                  Phone Number
                </label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="date"
                  className="form-control"
                  id="DOB"
                  placeholder="DOB"
                  value={txtDOB}
                  onChange={changeDOBHandler}
                />
                <label htmlFor="DOB">DOB</label>
              </div>

              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={chkAreYouAnOrganisation}
                  id="areYouAnOrganisation"
                  onChange={changeAreYouOrganisationHandler}
                />
                <label
                  className="form-check-label"
                  htmlFor="areYouAnOrganisation"
                >
                  Are you an organisation ?
                </label>
              </div>

              {chkAreYouAnOrganisation === true ? (
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="OrganisationName"
                    placeholder="Organisation Name"
                    value={txtOrganisationName}
                    onChange={changeOrganisationNameHandler}
                  />
                  <label htmlFor="OrganisationName">Organisation Name</label>
                </div>
              ) : (
                <div></div>
              )}

              <div className="d-grid">
                <button
                  className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                  onClick={fnRegisterUser}
                >
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
