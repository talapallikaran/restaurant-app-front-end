import React, { useState } from "react";
import InputField from "../../../components/InputField/InputField";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import {
  PhoneNumberUtil,
  PhoneNumberFormat as PNF,
} from "google-libphonenumber";

function Login() {
  const [mobile, setMobile] = useState({});
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mobile.length !== 10) {
      setMessage("Enter 10 Digit Number");
    } else if (mobile.length === 10) {
      const phoneUtil = PhoneNumberUtil.getInstance();
      if (phoneUtil.isValidNumber(phoneUtil.parse(`+91${mobile}`)) === true) {
        if (
          phoneUtil.format(phoneUtil.parse(`+91${mobile}`), PNF.INTERNATIONAL)
        )
          navigate("/OtpStep");
      } else {
        setMessage("Enter valid number");
      }
    } else {
      setMessage("Enter valid number");
    }
  };
  return (
    <div className="wrapper">
      <div className="wrapper-mobile">
        <div className="container">
          <div className="row">
            <div className="col-12 icon">
              <a href="">
                <i className="fa-solid fa-mobile-screen"></i>
              </a>
              <h2>verification</h2>
              <p>
                we will you send a <strong>one time password</strong> on your
                mobile number
              </p>
            </div>
          </div>
          <div className="row verification">
            <div className="col-lg-5 col-md-5 col-sm-12">
              <InputField
                type="number"
                id="phone"
                name="mobile"
                placeholder="Enter Mobile"
                value={mobile}
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
              />
              <br />
              <p className="errorMessage">{message}</p>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12">
              {/* <Link to={"/otpStep"}> */}
              <CustomButton
                className="button"
                name="get otp"
                type="Submit"
                onClick={handleSubmit}
              />
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
