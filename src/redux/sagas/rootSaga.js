import { all, call } from "redux-saga/effects";
import authenticationSagas from "./authenticationSagas";

export default function* rootSaga() {
  yield all([call(authenticationSagas)]);
}
