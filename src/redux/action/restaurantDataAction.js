import * as actions from "../constants/actionsConstants";

//**********************RestaurantData*****************************/
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


//**********************MenuData*****************************/
export const MenuFetchData = (id) => {
  console.log("in Action file id get", id);
  return {
    type: actions.menuData.GET_MENU_REQUESTED,
    payload: id
  };
};

export const MenuFetchDataSuccess = (menu) => {
  return {
    type: actions.menuData.GET_MENU_SUCCESS,
    payload: menu,
  };
};

export const MenuFetchDataFail = (error) => {
  return {
    type: actions.menuData.GET_MENU_FAILED,
    payload: error,
  };
};