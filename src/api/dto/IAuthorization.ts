export interface IRegistrationRequest {
  userName: string;
  login: string;
  password: string;
}

export interface ILoginRequest {
  login: string;
  password: string;
}

export interface ILogin {
  isAuth: boolean;
  name: string | null;
  error?: null | string;
  isFetching: boolean;
  token: string | null;
  avatarUrl: string | null;
}

export interface IAuthorization {
  name: string;
  avatarUrl: string;
  token: string;
}
