import axios, { Method } from "axios";

export const axiosHandler = async (
  method: Method,
  endpoint: string,
  payload?: any
) => {
  try {
    const response = await axios({
      method,
      url: endpoint,
      data: payload,
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
};
