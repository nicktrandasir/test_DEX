import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IAuthorization,
  ILoginRequest,
  IRegistrationRequest,
} from "../../api/dto/IAuthorization";
import { auth } from "../../api/requests/authorization";

export const setRegister = createAsyncThunk<
  IAuthorization,
  IRegistrationRequest
>(
  "authorization/SignUp",
  ({
    userName,
    login,
    password,
  }: {
    userName: string;
    login: string;
    password: string;
  }) => {
    return auth.register({ userName, login, password });
  }
);

export const setLogin = createAsyncThunk<IAuthorization, ILoginRequest>(
  "authorization/SignIn",
  ({ login, password }) => {
    return auth.login({ login, password });
  }
);
