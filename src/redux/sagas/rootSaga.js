import { all, call } from "redux-saga/effects";
import authenticationSagas from "./authenticationSagas";
import restaurantDataSaga from "./restaurantDataSaga"

export default function* rootSaga() {
  yield all([
    authenticationSagas(),
    restaurantDataSaga()])
}
