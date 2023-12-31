import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./slices/counterSlice";

export const store = configureStore({ reducer: rootReducer });
