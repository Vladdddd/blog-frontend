import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
  createdAt: string;
  email: string;
  fullName: string;
  updatedAt: string;
  _v: number;
  _id: string | null;
}

type AuthState = {
  user: IUser;
};

export const initialUser: IUser = {
  createdAt: "",
  email: "",
  fullName: "",
  updatedAt: "",
  _v: 0,
  _id: null,
};

const slice = createSlice({
  name: "auth",
  initialState: { user: initialUser } as AuthState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user } }: PayloadAction<{ user: IUser }>
    ) => {
      state.user = user;
    },
  },
});

export const { setCredentials } = slice.actions;
export default slice.reducer;

export const selectIsAuth = (state: any) => state.auth.user !== initialUser;
