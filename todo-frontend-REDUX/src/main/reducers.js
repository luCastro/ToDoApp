import { combineReducers } from "redux";

import toDoReducer from "../todo/toDoReducer";

const rootReducer = combineReducers({
  todo: toDoReducer,
});

export default rootReducer;
