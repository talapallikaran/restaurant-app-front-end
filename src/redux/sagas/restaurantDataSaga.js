import { call, put, takeEvery } from "redux-saga/effects";
import * as actions from "../constants/actionsConstants";
import * as apiServices from "../../services/apiServices";



function* handleGetdata(action) {
  try {
    const data = async () => {
      const response = await apiServices.fetchrestaurantData((action.payload));
      return response;
    };
    const response = yield call(data);
    if (response.status === 200) {
      // api in progress - State - false
      // Api is successful - State - true
      // Api failed - State - false
      yield put({
        type: actions.restaurantdata.GET_RESTAURANT_DATA_SUCCESS,
        payload: {
          data: response.data,
          apiLoading: false,
          apiGetDataSuccess: true,
          apiGetDataFail: false,
        },
      });
    }else if (response === null && undefined) {
      yield put({
        type: actions.restaurantdata.GET_RESTAURANT_DATA_SUCCESS,
        payload: {
          data: response.data,
          apiLoading: false,
          apiGetDataSuccess: false,
          apiGetDataFail: false,
        },
      });
    } else {
      yield put({
        type: actions.restaurantdata.GET_RESTAURANT_DATA_SUCCESS,
        payload: {
          data: response.data,
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
      type: actions.restaurantdata.GET_RESTAURANT_DATA_FAILED,
      payload: {
        apiLoading: false,
        apiGetDataSuccess: false,
        apiGetDataFail: true,
      },
    });
  }
}



function* getMenuData(action) {
  try {
    const data = async () => {
      const response = await apiServices.fetchMenuData((action.payload));
      return response;
    };
    const response = yield call(data);
    console.log("Response in saga file >>>>>>>>>>>>>>>>>>>>>>>>>>",response);
    if (response.status === 200) {
      // api in progress - State - false
      // Api is successful - State - true
      // Api failed - State - false
      yield put({
        type: actions.menuData.GET_MENU_SUCCESS,
        payload: {
          menu: response.data,
          apiLoading: false,
          apiGetDataSuccess: true,
          apiGetDataFail: false,
        },
      });
    }else if (response === null && undefined) {
      yield put({
        type: actions.menuData.GET_MENU_SUCCESS,
        payload: {
          menu: response.data,
          apiLoading: false,
          apiGetDataSuccess: false,
          apiGetDataFail: false,
        },
      });
    } else {
      yield put({
        type: actions.menuData.GET_MENU_SUCCESS,
        payload: {
          menu: response.data,
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
      type: actions.menuData.GET_MENU_FAILED,
      payload: {
        apiLoading: false,
        apiGetDataSuccess: false,
        apiGetDataFail: true,
      },
    });
  }
}










function* watchdata() {
  yield takeEvery("GET_RESTAURANT_DATA_REQUESTED", handleGetdata);
  yield takeEvery("GET_MENU_REQUESTED", getMenuData);
}

export default watchdata;
