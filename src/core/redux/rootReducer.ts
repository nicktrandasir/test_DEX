import {combineReducers, compose} from "@reduxjs/toolkit";
import {authSlice} from "../../modules/authorization/authorizationSlice";
import {store} from "./store";

export const rootReducer = combineReducers({
    auth: authSlice.reducer
})
export const composeEnhancers =  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export type rootReducerType = typeof rootReducer
export type AppStateType = ReturnType<rootReducerType>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
