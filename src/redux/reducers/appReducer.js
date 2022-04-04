import { appAction } from "../constants/actionsConstants";

const initialState = {
  message: "",
  getSuccess: false,
  getFail: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case appAction.SHOW_ALERT: {
      return {
        ...state,
        message: action.payload.message,
        getSuccess: action.payload.getSuccess,
        getFail: action.payload.getFail,
      };
    }
    default:
      return state;
  }
};

export default appReducer;
