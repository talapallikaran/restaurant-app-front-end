import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import AuthenticationReducer from "./authenticationReducer";
import AppReducer from "./appReducer";
import restaurantDataReducer from "./restaurantDataReducer"

const rootReducer = combineReducers({
  restaurantDataReducer:restaurantDataReducer,
  auth: AuthenticationReducer,
  app: AppReducer,
  routing: routerReducer,
});

export default rootReducer;
