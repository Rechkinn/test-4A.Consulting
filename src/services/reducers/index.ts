import { combineReducers } from "redux";
import { timerReducer } from "./timer";
import { tariffsReducer } from "./tariffs";

export const rootReducer = combineReducers({
  timer: timerReducer,
  tariffs: tariffsReducer,
});
