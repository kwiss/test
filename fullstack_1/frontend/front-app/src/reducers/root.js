import { combineReducers } from "redux";

import objectivesReducer from "./objectives";

export default combineReducers({
  objectives: objectivesReducer
});
