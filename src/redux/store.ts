import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";

export const sotre = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
