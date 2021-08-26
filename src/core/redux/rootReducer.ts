import { combineReducers, compose } from "@reduxjs/toolkit";
import { authSlice } from "../../modules/authorization/authorizationSlice";
import { playersSlice } from "../../modules/players/playersSlice";
import { teamsSlice } from "../../modules/teams/teamsSlice";
import { store } from "./store";

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  players: playersSlice.reducer,
  teams: teamsSlice.reducer,
});
export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export type rootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<rootReducerType>;
export type AppDispatch = typeof store.dispatch;
