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


export const Add_To_Plate = (data) => {
 
  return {
    type: actions.menuData.ADD_TO_PLATE,
    payload: {
      data,
    quantity: "1",

    }
  };
};


export const Remove_To_Plate = (menu_id) => {


  return {
    type: actions.menuData.REMOVE_TO_PLATE,
    payload:menu_id
  };
};
export const ADD_Quantity = (menu_id) => {
  return {
    type: actions.menuData.ADD_QUANTITY,
    payload:menu_id
  };
};

export const Remove_Quantity = (menu_id) => {

  return {
    type: actions.menuData.REMOVE_QUANTITY,
    payload:menu_id
  };
};