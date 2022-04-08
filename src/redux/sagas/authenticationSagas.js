import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../constants/actionsConstants";
import * as apiServices from "../../services/apiServices";

// Define handlers
function* FETCH_USER(action) {
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
    const response = yield call(apiServices.fetchUser(action.payload));
    if (response.status === 200) {
      yield put({
        type: actions.appAction.SHOW_ALERT,
        payload: {
          message: "User Data fetched successfully",
          getSuccess: true,
          getFail: false,
        },
      });
      // api in progress - State - false
      // Api is successful - State - true
      // Api failed - State - false
      yield put({
        type: actions.userAction.FETCH_USER_SUCCESS,
        payload: {
          user: response.data,
          apiLoading: false,
          apiGetDataSuccess: true,
          apiGetDataFail: false,
        },
      });
    } else if (response === null && undefined) {
      yield put({
        type: actions.appAction.SHOW_ALERT,
        payload: {
          message: "No user data found",
          getSuccess: false,
          getFail: false,
        },
      });
      yield put({
        type: actions.userAction.FETCH_USER_SUCCESS,
        payload: {
          apiLoading: false,
          apiGetDataSuccess: false,
          apiGetDataFail: false,
        },
      });
    } else {
      yield put({
        type: actions.appAction.SHOW_ALERT,
        payload: {
          message: "Could not fetch user data",
          getSuccess: false,
          getFail: true,
        },
      });
      yield put({
        type: actions.userAction.FETCH_USER_SUCCESS,
        payload: {
          apiLoading: false,
          apiGetDataSuccess: false,
          apiGetDataFail: true,
        },
      });
    }
  } catch (e) {
    yield put({
      type: actions.appAction.SHOW_ALERT,
      payload: {
        message: "Data couldn't be fetched",
        getSuccess: false,
        getFail: true,
      },
    });
    // api in progress - State - false
    // Api is successful - State - false
    // Api failed - State - true
    yield put({
      type: actions.userAction.FETCH_USER_FAILURE,
      payload: {
        apiLoading: false,
        apiGetDataSuccess: false,
        apiGetDataFail: true,
      },
    });
  }
}
function* FETCH_OTP(action) {
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
    const response = yield call(apiServices.fetchOTP(action.payload));
    if (response.status === 200) {
      yield put({
        type: actions.appAction.SHOW_ALERT,
        payload: {
          message: "User Data fetched successfully",
          getSuccess: true,
          getFail: false,
        },
      });
      // api in progress - State - false
      // Api is successful - State - true
      // Api failed - State - false
      yield put({
        type: actions.otpVerification.FETCH_OTP_SUCCESS,
        payload: {
          otp: response.data,
          apiLoading: false,
          apiGetDataSuccess: true,
          apiGetDataFail: false,
        },
      });
    } else if (response === null && undefined) {
      yield put({
        type: actions.appAction.SHOW_ALERT,
        payload: {
          message: "No user data found",
          getSuccess: false,
          getFail: false,
        },
      });
      yield put({
        type: actions.otpVerification.FETCH_OTP_SUCCESS,
        payload: {
          apiLoading: false,
          apiGetDataSuccess: false,
          apiGetDataFail: false,
        },
      });
    } else {
      yield put({
        type: actions.appAction.SHOW_ALERT,
        payload: {
          message: "Could not fetch user data",
          getSuccess: false,
          getFail: true,
        },
      });
      yield put({
        type: actions.otpVerification.FETCH_OTP_SUCCESS,
        payload: {
          apiLoading: false,
          apiGetDataSuccess: false,
          apiGetDataFail: true,
        },
      });
    }
  } catch (e) {
    yield put({
      type: actions.appAction.SHOW_ALERT,
      payload: {
        message: "Data couldn't be fetched",
        getSuccess: false,
        getFail: true,
      },
    });
    // api in progress - State - false
    // Api is successful - State - false
    // Api failed - State - true
    yield put({
      type: actions.otpVerification.FETCH_OTP_FAILURE,
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
  yield takeLatest(actions.userAction.FETCH_USER, FETCH_USER);
  yield takeLatest(actions.otpVerification.FETCH_OTP, FETCH_OTP);
}

export default initializeWatcher;
