import { axiosHandler } from "../lib/axiosHandler";

export const getDashboardData = async () => {
  const response = await axiosHandler(
    "GET",
    "http://localhost:8008/api/dashboard/blood-groups-data"
  );
  return response;
};
