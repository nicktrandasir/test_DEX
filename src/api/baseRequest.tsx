import axios from "axios";

export const BaseRequest = axios.create({
  baseURL: "http://dev.trainee.dex-it.ru/api/",
});
