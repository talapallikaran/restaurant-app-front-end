import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import UserReducer from "./userReducer";
import AppReducer from "./appReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  app: AppReducer,
  routing: routerReducer,
});

export default rootReducer;
