import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "react-router-redux";
import rootReducer from "../redux/reducers/rootReducers";
import rootSaga from "../redux/sagas/rootSaga";
import history from "../utils/history";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlerware = [sagaMiddleware, routerMiddleware(history)];

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middlerware))
);
sagaMiddleware.run(rootSaga);

export default store;
