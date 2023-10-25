import { axiosHandler } from "../lib/axiosHandler";

export const getDashboardData = async () => {
  const response = await axiosHandler(
    "GET",
    "/api/dashboard/blood-groups-data"
  );
  return response;
};
