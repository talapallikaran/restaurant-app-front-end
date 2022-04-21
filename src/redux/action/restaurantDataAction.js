import * as actions from "../constants/actionsConstants";

export const restaurantGetdata = () => {
  return {
    type: actions.restaurantdata.GET_RESTAURANT_DATA_REQUESTED,
  };
};

export const restaurantdatasuccess = (data) => {
  return {
    type: actions.restaurantdata.GET_RESTAURANT_DATA_SUCCESS,
    payload: data,
  };
};

export const restaurantdatafail = (error) => {
  return {
    type: actions.restaurantdata.GET_RESTAURANT_DATA_FAILED,
    payload: error,
  };
};
