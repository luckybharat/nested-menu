import { createStore, applyMiddleware, combineReducers } from "redux";
import ThunkMiddleware from "redux-thunk";
import navbar from "./navbar";

const rootReducer = combineReducers({
  navbar,
});

const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware));

export default store;
