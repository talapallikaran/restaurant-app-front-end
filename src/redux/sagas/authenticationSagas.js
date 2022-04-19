import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../constants/actionsConstants";
import * as apiServices from "../../services/apiServices";

// Define handlers
function* POST_MOBILE(action) {
  // Shoud be in try
  // Need to validate if we got the response
  try {
    // Add error handling
    // if response !== 200
    // if response !== null
    // if response !== undefined
    // if reponse has error message
    // api in progress - State - true
    // Api is successful - State
    // Api failed - State - true
    const postMobile = async () => {
      const response = await apiServices.fetchUser(action.payload);
      return response;
    };
    const response = yield call(postMobile);
    if (response.status === 200) {
      // api in progress - State - false
      // Api is successful - State - true
      // Api failed - State - false
      yield put({
        type: actions.mobileAction.POST_NUMBER_SUCCESS,
        payload: {
          mobile: response.data,
          apiLoading: false,
          apiGetDataSuccess: true,
          apiGetDataFail: false,
        },
      });
    } else if (response === null && undefined) {
      yield put({
        type: actions.mobileAction.POST_NUMBER_SUCCESS,
        payload: {
          mobile: response.data,
          apiLoading: false,
          apiGetDataSuccess: false,
          apiGetDataFail: false,
        },
      });
    } else {
      yield put({
        type: actions.mobileAction.POST_NUMBER_SUCCESS,
        payload: {
          mobile: response.data,
          apiLoading: false,
          apiGetDataSuccess: false,
          apiGetDataFail: true,
        },
      });
    }
  } catch (e) {
    // api in progress - State - false
    // Api is successful - State - false
    // Api failed - State - true
    yield put({
      type: actions.mobileAction.POST_NUMBER_FAILED,
      payload: {
        apiLoading: false,
        apiGetDataSuccess: false,
        apiGetDataFail: true,
      },
    });
  }
}
function* POST_OTP(action) {
  // Shoud be in try
  // Need to validate if we got the response
  try {
    // Add error handling
    // if response !== 200
    // if response !== null
    // if response !== undefined
    // if reponse has error message
    // api in progress - State - true
    // Api is successful - State
    // Api failed - State - true
    const postOTP = async () => {
      const response = await apiServices.fetchOTP(action.payload);
      return response;
    };
    const response = yield call(postOTP);
    if (response.status === 200) {
      // api in progress - State - false
      // Api is successful - State - true
      // Api failed - State - false
      yield put({
        type: actions.otpVerificationAction.POST_OTP_SUCCESS,
        payload: {
          otp: response.data,
          apiLoading: false,
          apiGetDataSuccess: true,
          apiGetDataFail: false,
        },
      });
    } else if (response === null && undefined) {
      yield put({
        type: actions.otpVerificationAction.POST_OTP_SUCCESS,
        payload: {
          otp: response.data,
          apiLoading: false,
          apiGetDataSuccess: false,
          apiGetDataFail: false,
        },
      });
    } else {
      yield put({
        type: actions.otpVerificationAction.POST_OTP_SUCCESS,
        payload: {
          otp: response.data,
          apiLoading: false,
          apiGetDataSuccess: false,
          apiGetDataFail: true,
        },
      });
    }
  } catch (e) {
    // api in progress - State - false
    // Api is successful - State - false
    // Api failed - State - true
    yield put({
      type: actions.otpVerificationAction.POST_OTP_FAILED,
      payload: {
        apiLoading: false,
        apiGetDataSuccess: false,
        apiGetDataFail: true,
      },
    });
  }
}

// Declare watcher

// Declare watcher
function* initializeWatcher() {
  yield takeLatest(actions.mobileAction.POST_NUMBER, POST_MOBILE);
  yield takeLatest(actions.otpVerificationAction.POST_OTP, POST_OTP);
}

export default initializeWatcher;
