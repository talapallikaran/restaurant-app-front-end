import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CustomButton from "../../../components/CustomButton";
import InputField from "../../../components/InputField/InputField";
import logo from "../../../assets/img/logo.png";

function OtpStep(props) {
  const { otpAction, mobile, otp } = props;

  const [isOTP, setIsOTP] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
  });
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (otp && otp.status === "success") {
      localStorage.removeItem("phone");
      setMessage("Login Successful");
      // navigate("/")
    } else if (otp && otp.status === "failed") {
      setMessage("Invalid OTP");
    }
  }, [otp]);

  const handleSubmit = (e) => {
    const value = Object.keys(isOTP)
      .map((key) => `${isOTP[key]}`)
      .join("");
    if (value.length !== 4) {
      setMessage("Enter 4 Digit OTP");
    } else if (value.length === 4) {
      const parameter = {
        phone: localStorage.getItem("phone"),
        otp: value,
      };
      otpAction(parameter);
    }
  };

  const handleChange = (e) => {
    let value = e.target.value;
    value = value.replace(/[^0-9]/g, "");
    const name = e.target.name;
    setIsOTP({
      ...isOTP,
      [name]: value,
    });
  };

  const inputfocus = (e) => {
    if (e.key === "Delete" || e.key === "Backspace" || e.keyCode === 37) {
      const next = e.target.tabIndex - 2;
      if (next > -1) {
        e.target.form.elements[next].focus();
      }
    } else {
      const next = e.target.tabIndex;
      if (next < 4) {
        e.target.form.elements[next].focus();
      }
    }
  };
  console.log("otp", isOTP);
  const { otp1, otp2, otp3, otp4 } = isOTP;
  return (
    <div className="wrapper login-page">
      <div className="otpMsg">
        <h1>
          Your OTP : <span className="otp">{mobile && mobile.otp}</span>
        </h1>
      </div>

      <div className="container">
        <div className="restaurant-inp">
          <img src={logo} alt="does not open" className="logo" />
        </div>
        <form>
          <div className="login-flex">
            <InputField
              type="text"
              id="mobile"
              name="otp1"
              placeholder=""
              className="login-data"
              value={otp1}
              maxLength="1"
              tabIndex="1"
              onChange={handleChange}
              onkeyup={inputfocus}
            />
            <InputField
              type="text"
              id="mobile"
              name="otp2"
              placeholder=""
              className="login-data"
              value={otp2}
              maxLength="1"
              tabIndex="2"
              onChange={handleChange}
              onkeyup={inputfocus}
            />
            <InputField
              type="text"
              id="mobile"
              name="otp3"
              placeholder=""
              className="login-data"
              value={otp3}
              maxLength="1"
              tabIndex="3"
              onChange={handleChange}
              onkeyup={inputfocus}
            />
            <InputField
              type="text"
              id="mobile"
              name="otp4"
              placeholder=""
              className="login-data"
              value={otp4}
              maxLength="1"
              tabIndex="4"
              onChange={handleChange}
              onkeyup={inputfocus}
            />
          </div>
        </form>
        <div className="login-btn">
          <CustomButton
            className="valid-btn"
            name="Login"
            type="Submit"
            onClick={handleSubmit}
          />
          <p className="errorMessage">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default OtpStep;
