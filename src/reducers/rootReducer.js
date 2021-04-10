// combinación de todos los reducers: auth, calendario, ui

import { combineReducers } from "redux";

import { calendarReducer } from "./calendarReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
  ui: uiReducer,
  calendar: calendarReducer,
  // TODO: AuthReducer
});
