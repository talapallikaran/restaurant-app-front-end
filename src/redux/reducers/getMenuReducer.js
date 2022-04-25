// import { restauranData } from "../constants/actionsConstants";
import { menuData } from "../constants/actionsConstants";

const GetMenuData = {
  menu: [],
  apiLoading: false,
  apiGetDataSuccess: false,
  apiGetDataFail: false,
};

const initialState = {
  ...GetMenuData,
};


const getMenuData = (state = initialState, action) => {
//   console.log("reducer file action payload ",action.payload);
  switch (action.type) {
    case menuData.GET_MENU_REQUESTED :{
      return { ...state,
         apiLoading: true
         };
    }
    case menuData.GET_MENU_SUCCESS: {
      console.log("reducer file success",action.payload);
      return {
        ...state,
        menu: action.payload,
        apiLoading: action.payload.apiLoading,
        apiGetDataSuccess: action.payload.apiGetDataSuccess,
        apiGetDataFail: action.payload.apiGetDataFail,
      };
    }
    case menuData.GET_MENU_FAILED: {
        console.log("data fail action file",action.payload);
      return {
        ...state,
        menu: action.payload,
        apiLoading: action.payload.apiLoading,
        apiGetDataSuccess: action.payload.apiGetDataSuccess,
        apiGetDataFail: action.payload.apiGetDataFail,
      };
    }
     default:
      return state;
  }
};

export default getMenuData;