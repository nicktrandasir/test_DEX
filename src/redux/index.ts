import {configureStore, combineReducers, compose} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    //auth
    //login
})

const composeEnhancers =  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export type rootReducerType = typeof rootReducer
export type AppStateType = ReturnType<rootReducerType>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const store = configureStore({
    reducer: rootReducer,
    devTools: composeEnhancers
})
