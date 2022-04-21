import { restaurantdata } from "../constants/actionsConstants";


const data = {
  data: [],
  apiLoading: false,
  apiGetDataSuccess: false,
  apiGetDataFail: false,
};


const initialstate = {
   ...data
};

const restaurantData = (state = initialstate, action) => {
  
  if (action.type === restaurantdata.GET_RESTAURANT_DATA_REQUESTED) {

    return {
      ...state, apiLoading: true 
    };
  }

  if (action.type === restaurantdata.GET_RESTAURANT_DATA_SUCCESS) {
    return {
      ...state,
      data: action.payload,
      apiLoading: action.payload.apiLoading,
      apiGetDataSuccess: action.payload.apiGetDataSuccess,
      apiGetDataFail: action.payload.apiGetDataFail,

    };
  }

  if (action.type === restaurantdata.GET_RESTAURANT_DATA_FAILED) {
    return {
      ...state,
      data: action.payload,
      apiLoading: action.payload.apiLoading,
      apiGetDataSuccess: action.payload.apiGetDataSuccess,
      apiGetDataFail: action.payload.apiGetDataFail,
    };
  }    else {
    return state;
  }
};

export default restaurantData;
