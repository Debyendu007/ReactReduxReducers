import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducer, combineReducers } from "redux";

const allReducer = combineReducers({
    counterReducer,
    loggedReducer
});

export default allReducer;