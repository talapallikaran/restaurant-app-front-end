import React, { useState } from "react";
import CustomButton from "../../../components/CustomButton";
import InputField from "../../../components/InputField/InputField";

function OtpStep() {
  const [isOTP, setIsOTP] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isOTP.length !== 4) {
      setMessage("Enter Valid OTP");
    }
  };

  return (
    <div className="wrapper">
      <div className="wrapper-mobile">
        <div className="container">
          <div className="row">
            <div className="col-12 icon-page2">
              <a href="">
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
                type="number"
                id="btn"
                placeholder="Enter OTP"
                maxLength="4"
                value={isOTP}
                onChange={(e) => {
                  setIsOTP(e.target.value);
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
