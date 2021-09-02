import {
  IAuthorization,
  ILoginRequest,
  IRegistrationRequest,
} from "../dto/IAuthorization";
import { BaseRequest } from "../baseRequest";

export const auth = {
  register: ({
    userName,
    login,
    password,
  }: IRegistrationRequest): Promise<IAuthorization> => {
    return BaseRequest.post("Auth/SignUp", {
      userName,
      login,
      password,
    }).then((response) => {
      return response.data;
    });
  },
  login: ({ login, password }: ILoginRequest) => {
    return BaseRequest.post("Auth/SignIn", {
      login,
      password,
    }).then((response) => {
      return response.data;
    });
  },
};
