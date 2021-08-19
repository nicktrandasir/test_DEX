import { configureStore } from "@reduxjs/toolkit";
import { composeEnhancers, rootReducer } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  devTools: composeEnhancers,
});
