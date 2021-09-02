import { createSlice } from "@reduxjs/toolkit";
import { ILogin } from "../../api/dto/IAuthorization";
import { HandleErrors } from "../../helpers/handleErrors/handleErrors";
import { setLoginThunk, setRegisterThunk } from "./authorizationThunk";

const initialState: ILogin = {
  isAuth: localStorage.isAuth || false,
  name: localStorage.name || null,
  error: null,
  isFetching: false,
  token: localStorage.token || null,
  avatarUrl: localStorage.avatarUrl || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuth = false;
      state.name = null;
      state.avatarUrl = null;
      localStorage.clear();
    },
  },
  extraReducers: {
    [setRegisterThunk.pending.type]: (state) => {
      state.isFetching = true;
    },
    [setRegisterThunk.fulfilled.type]: (state, { payload }) => {
      state.isAuth = true;
      state.name = payload.name;
      state.avatarUrl = payload.avatarUrl;
      state.token = payload.token;

      localStorage.isAuth = true;
      localStorage.token = payload.token;
      localStorage.name = payload.name;
      localStorage.avatarUrl = payload.avatarUrl;
    },
    [setRegisterThunk.rejected.type]: (state, { error }) => {
      state.isFetching = false;
      state.error = error?.message;
      HandleErrors(error);
    },

    [setLoginThunk.pending.type]: (state) => {
      state.isFetching = true;
    },
    [setLoginThunk.fulfilled.type]: (state, { payload }) => {
      state.isAuth = true;
      state.name = payload.name;
      state.avatarUrl = payload.avatarUrl;
      state.token = payload.token;

      localStorage.isAuth = true;
      localStorage.token = payload.token;
      localStorage.name = payload.name;
      localStorage.avatarUrl = payload.avatarUrl;
    },
    [setLoginThunk.rejected.type]: (state, { error }) => {
      state.isFetching = false;
      state.error = error?.message;
      HandleErrors(error);
    },
  },
});

export const { logout } = authSlice.actions;
