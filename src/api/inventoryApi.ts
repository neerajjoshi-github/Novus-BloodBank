import { axiosHandler } from "../lib/axiosHandler";

type InventorayData = {
  inventoryType: "in" | "out";
  email: string;
  quantity: string;
  bloodGroup: string;
  organization?: string;
};

export const addToInventoray = async (data: InventorayData) => {
  const response = await axiosHandler("POST", "/api/inventory/add", data);
  return response;
};

export const getInventory = async () => {
  const response = await axiosHandler("GET", "/api/inventory");
  return response;
};

export const getAllDonarsOfOrganization = async () => {
  const response = await axiosHandler("GET", "/api/inventory/all-donars");
  return response;
};

export const getAllHospitalsOfOrganization = async () => {
  const response = await axiosHandler("GET", "/api/inventory/all-hospitals");
  return response;
};

export const getAllOrganizationsOfHospitalOrDonar = async () => {
  const response = await axiosHandler(
    "GET",
    "/api/inventory/all-organizations"
  );
  return response;
};

export const getInventoryWithFilters = async (filters: any) => {
  const response = await axiosHandler("POST", "/api/inventory/filters", {
    filters,
  });
  return response;
};
