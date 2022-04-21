import React, { useEffect, useState } from "react";
import InputField from "../../../components/InputField/InputField";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/img/logo.png";
import {
  PhoneNumberUtil,
  PhoneNumberFormat as PNF,
} from "google-libphonenumber";

function Login(props) {
  const { userAction } = props;
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (mobile.length !== 10) {
      setMessage("Enter 10 Digit Number");
    } else if (mobile.length === 10) {
      const phoneUtil = PhoneNumberUtil.getInstance();
      if (phoneUtil.isValidNumber(phoneUtil.parse(`+91${mobile}`)) === true) {
        if (
          phoneUtil.format(phoneUtil.parse(`+91${mobile}`), PNF.INTERNATIONAL)
        ) {
          const parameter = {
            phone: mobile,
          };
          userAction(parameter);
          localStorage.setItem("phone", `${mobile}`);
          navigate("/otpstep");
        }
      } else {
        setMessage("Enter valid number");
      }
    } else {
      setMessage("Enter valid number");
    }
  };

  const handleChange = (e) => {
    let text = e.target.value;
    text = text.replace(/[^0-9]/g, "");
    setMobile(text);
  };

  return (
    <div className="wrapper registration-form">
      <div className="container">
        <div className="restaurant-img">
          <img src={logo} alt="does not open" className="logo" />
        </div>
        <div className="validation">
          {/* <input
            type="number"
            placeholder="your mobile number"
            name="mobile"
            id="mobile"
            required
            className="validation-data"
          /> */}
          <InputField
            type="text"
            id="mobile"
            name="mobile"
            placeholder="Enter Mobile"
            maxLength="10"
            value={mobile}
            onChange={handleChange}
            className="validation-data"
          />
          {/* <button type="submit" class="valid-btn">
            Send OTP
          </button> */}
          <CustomButton
            className="valid-btn"
            name=" Send OTP"
            type="Submit"
            onClick={handleSubmit}
          />
          <p className="errorMessage">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
