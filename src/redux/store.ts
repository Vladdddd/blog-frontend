import { configureStore } from "@reduxjs/toolkit";

import { authApi } from "./authApi";
import { postsApi } from "./postsApi";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(postsApi.middleware, authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
