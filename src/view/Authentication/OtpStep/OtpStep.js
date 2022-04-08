import React, { useState } from "react";
import CustomButton from "../../../components/CustomButton";
import InputField from "../../../components/InputField/InputField";

function OtpStep(props) {
  const { otpAction } = props;
  const [isOTP, setIsOTP] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNaN(isOTP) === true) {
      setMessage("Enter Valid OTP");
    } else if (isOTP.length !== 4) {
      setMessage("Enter Valid OTP2");
    } else if (isOTP.length === 4) {
      const parameter = {
        phone: localStorage.getItem("phone"),
        otp: isOTP,
      };
      otpAction(parameter);
    }
  };

  return (
    <div className="wrapper">
      <div className="wrapper-mobile">
        <div className="container">
          <div className="row">
            <div className="col-12 icon-page2">
              <a>
                <i className="fa-solid fa-mobile-screen"></i>
              </a>
              <h2>verification</h2>
              <p>
                you will get a OTP via <strong>SMS</strong>
              </p>
            </div>
          </div>
          <div className="row verification-page2">
            <div className="col-lg-5 col-md-5 col-sm-12">
              <InputField
                type="text"
                id="btn"
                placeholder="Enter OTP"
                value={isOTP}
                maxLength="4"
                onChange={(e) => {
                  let text = e.target.value;
                  text = text.replace(/[^0-9]/g, "");
                  setIsOTP(text);
                }}
              />
              <p className="errorMessage">{message}</p>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12">
              <CustomButton
                className="button"
                name="verify"
                type="Submit"
                onClick={handleSubmit}
              />
            </div>
            <p className="resend">
              did't receive the verification OTP?{" "}
              <span>
                <a href="">Resend again</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtpStep;
