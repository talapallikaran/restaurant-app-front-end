import * as actions from "../constants/actionsConstants";

// actions

//***********************************LOGIN ACTION*********************** */
export const sendMobileNumber = (id) => {
  return {
    type: actions.mobileAction.POST_NUMBER,
    payload: id,
  };
};

export const sendMobileNumberSuccess = (value) => {
  return {
    type: actions.mobileAction.POST_NUMBER_SUCCESS,
    payload: value,
  };
};
export const sendMobileNumberfailed = (error) => {
  return {
    type: actions.mobileAction.POST_NUMBER_FAILED,
    payload: error,
  };
};

//**********************************OTP ACTION********************************************* */
export const sendMobileVerificationOTP = (id) => {
    return {
    type: actions.otpVerificationAction.POST_OTP,
    payload: id,
  };
};

export const sendMobileVerificationOTPSuccess = (value) => {
  return {
    type: actions.otpVerificationAction.POST_OTP_SUCCESS,
    payload: value,
  };
};
export const sendMobileVerificationOTPFailed = (error) => {
  return {
    type: actions.otpVerificationAction.POST_OTP_FAILED,
    payload: error,
  };
};
