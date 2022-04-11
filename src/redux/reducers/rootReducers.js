import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import AuthenticationReducer from "./authenticationReducer";
import AppReducer from "./appReducer";

const rootReducer = combineReducers({
  auth: AuthenticationReducer,
  app: AppReducer,
  routing: routerReducer,
});

export default rootReducer;
