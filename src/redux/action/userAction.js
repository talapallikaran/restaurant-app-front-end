import * as actions from "../constants/actionsConstants";

// actions
export const getUsers = (value) => {
  return {
    type: actions.userAction.FETCH_USER,
    payload: value,
  };
};

export const postOTP = (value) => {
  return {
    type: actions.otpVerification.FETCH_OTP,
    payload: value,
  };
};
