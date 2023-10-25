import { axiosHandler } from "../lib/axiosHandler";

export type User = {
  // userType: "donar" | "organization" | "hospital" | "admin"; because of antd radio button
  userType: string;
  name?: string;
  organizationName?: string;
  hospitalName?: string;
  email: string;
  password: string;
  ownerName?: string;
  phone: string;
  website?: string;
  address: string;
};

type LoginData = {
  userType: string;
  email: string;
  password: string;
};

export const registerUser = async (data: User) => {
  const response = await axiosHandler("POST", "/api/user/register", data);
  return response;
};
export const loginUser = async (data: LoginData) => {
  const response = await axiosHandler("POST", "/api/user/login", data);
  return response;
};

export const getUser = async () => {
  const response = await axiosHandler("GET", "/api/user");
  return response;
};

export const getOrganizationTableData = async () => {
  const response = await axiosHandler(
    "GET",
    "/api/user/organization-table-data"
  );
  return response;
};
