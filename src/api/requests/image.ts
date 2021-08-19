import { BaseRequest } from "../baseRequest";

export const imageRequest = {
  save: (formData: FormData) => {
    return BaseRequest.post("/Image/SaveImage", formData, {
      headers: {
        Authorization: `Bearer ` + localStorage.token,
        "Content-Type": `multipart/form-data`,
      },
    }).then((response) => {
      return response.data;
    });
  },
};
