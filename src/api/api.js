import { axsiosInstance } from "./api.config";

const apiKey = "b83c82af01091468a48fc9ccb073f257";

export const getData_req = async (params) => {
  const response = await axsiosInstance.get(
    `weather?q=${params}&unets=metric&APPID=${apiKey}`
  );
  return response.data;
};
