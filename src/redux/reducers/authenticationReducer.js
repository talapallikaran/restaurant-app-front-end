import { userAction, otpVerification } from "../constants/actionsConstants";

const initialState = {
  user: [],
  otp: [],
  apiLoading: false,
  apiGetDataSuccess: false,
  apiGetDataFail: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userAction.FETCH_USER: {
      return { ...state, apiLoading: true };
    }
    case userAction.FETCH_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload.user,
        apiLoading: action.payload.apiLoading,
        apiGetDataSuccess: action.payload.apiGetDataSuccess,
        apiGetDataFail: action.payload.apiGetDataFail,
      };
    }
    case userAction.FETCH_USER_FAILURE: {
      return {
        ...state,
        user: action.payload.user,
        apiLoading: action.payload.apiLoading,
        apiGetDataSuccess: action.payload.apiGetDataSuccess,
        apiGetDataFail: action.payload.apiGetDataFail,
      };
    }

    case otpVerification.FETCH_OTP: {
      return { ...state, apiLoading: true };
    }
    case otpVerification.FETCH_OTP_SUCCESS: {
      return {
        ...state,
        otp: action.payload.otp,
        apiLoading: action.payload.apiLoading,
        apiGetDataSuccess: action.payload.apiGetDataSuccess,
        apiGetDataFail: action.payload.apiGetDataFail,
      };
    }
    case otpVerification.FETCH_OTP_FAILURE: {
      return {
        ...state,
        otp: action.payload.otp,
        apiLoading: action.payload.apiLoading,
        apiGetDataSuccess: action.payload.apiGetDataSuccess,
        apiGetDataFail: action.payload.apiGetDataFail,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
