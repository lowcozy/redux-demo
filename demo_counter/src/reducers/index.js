import { combineReducers } from "redux";

import countReducer from "./counter";
import userReducer from "./user";

const allRedecuer = combineReducers({
  counter: countReducer,
  users: userReducer
});

export default allRedecuer;
