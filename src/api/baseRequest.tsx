import axios from "axios";

export const BaseUrl = "http://dev.trainee.dex-it.ru";

export const BaseRequest = axios.create({
  baseURL: BaseUrl + "/api/",
});
