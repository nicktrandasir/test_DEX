import { createSlice } from "@reduxjs/toolkit";
import { ILogin } from "../../api/dto/IAuthorization";
import { HandleErrors } from "../../helpers/handleErrors/handleErrors";
import { setLogin, setRegister } from "./authorizationThunk";

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
    [setRegister.pending.type]: (state) => {
      state.isFetching = true;
    },
    [setRegister.fulfilled.type]: (state, { payload }) => {
      state.isAuth = true;
      state.name = payload.name;
      state.avatarUrl = payload.avatarUrl;
      state.token = payload.token;

      localStorage.isAuth = true;
      localStorage.token = payload.token;
      localStorage.name = payload.name;
      localStorage.avatarUrl = payload.avatarUrl;
    },
    [setRegister.rejected.type]: (state, {error}) => {
      state.isFetching = false;
      state.error = error?.message;
      HandleErrors(error);
    },

    [setLogin.pending.type]: (state) => {
      state.isFetching = true;
    },
    [setLogin.fulfilled.type]: (state, { payload }) => {
      state.isAuth = true;
      state.name = payload.name;
      state.avatarUrl = payload.avatarUrl;
      state.token = payload.token;

      localStorage.isAuth = true;
      localStorage.token = payload.token;
      localStorage.name = payload.name;
      localStorage.avatarUrl = payload.avatarUrl;
    },
    [setLogin.rejected.type]: (state, {error}) => {
      state.isFetching = false;
      state.error = error?.message;
      HandleErrors(error);
    }
  }
});

export const { logout } = authSlice.actions;
