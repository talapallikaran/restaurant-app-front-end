import {
  mobileAction,
  otpVerificationAction,
  resetState,
} from "../constants/actionsConstants";

const mobile = {
  mobile: [],
  apiLoading: false,
  apiGetDataSuccess: false,
  apiGetDataFail: false,
};
const otp = {
  otp: [],
  apiLoading: false,
  apiGetDataSuccess: false,
  apiGetDataFail: false,
};

const initialState = {
  ...mobile,
  ...otp,
};

const mobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case mobileAction.POST_NUMBER: {
      return { ...state, apiLoading: true };
    }
    case mobileAction.POST_NUMBER_SUCCESS: {
      return {
        ...state,
        mobile: action.payload,
        apiLoading: action.payload.apiLoading,
        apiGetDataSuccess: action.payload.apiGetDataSuccess,
        apiGetDataFail: action.payload.apiGetDataFail,
      };
    }
    case mobileAction.POST_NUMBER_FAILED: {
      return {
        ...state,
        mobile: action.payload,
        apiLoading: action.payload.apiLoading,
        apiGetDataSuccess: action.payload.apiGetDataSuccess,
        apiGetDataFail: action.payload.apiGetDataFail,
      };
    }

    case otpVerificationAction.POST_OTP: {
      return { ...state, apiLoading: true };
    }
    case otpVerificationAction.POST_OTP_SUCCESS: {
      return {
        ...state,
        otp: action.payload,
        apiLoading: action.payload.apiLoading,
        apiGetDataSuccess: action.payload.apiGetDataSuccess,
        apiGetDataFail: action.payload.apiGetDataFail,
      };
    }
    case otpVerificationAction.POST_OTP_FAILED: {
      return {
        ...state,
        otp: action.payload,
        apiLoading: action.payload.apiLoading,
        apiGetDataSuccess: action.payload.apiGetDataSuccess,
        apiGetDataFail: action.payload.apiGetDataFail,
      };
    }
    case resetState.RESET_STATE: {
      return {
        ...state,
        otp: initialState.otp,
      };
    }
    default:
      return state;
  }
};

export default mobileReducer;
