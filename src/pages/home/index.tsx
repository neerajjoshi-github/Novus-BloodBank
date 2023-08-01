import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { getDisplayName } from "../../lib/userHepler";
import { useState, useEffect } from "react";
import { Button, message } from "antd";
import { getDashboardData } from "../../api/dashboard";
import BloodGroupCard from "../../components/BloodGroupCard";
import { Link } from "react-router-dom";
import { colorsArray, bloodGroupsArray } from "../../lib/constants";
import { getInventory } from "../../api/inventoryApi";
import InventoryTable from "../../components/InventoryTable";

const Home = () => {
  const currentUser = useSelector(
    (state: RootState) => state.currentUser.currentUser
  );
  const [bloodGroupsData, setBloodGroupsData] = useState<any | null>(null);
  const [inventoryData, setInventoryData] = useState<any[]>([]);

  const getData = async () => {
    try {
      const response = await getDashboardData();
      const inventoryResponse = await getInventory();
      if (response.status === "ok") {
        setBloodGroupsData(response.data);
      } else {
        message.error(response.message);
      }
      if (inventoryResponse.status === "ok") {
        setInventoryData(inventoryResponse.data.slice(0, 5));
      } else {
        message.error(response.message);
      }
    } catch (error: any) {
      console.log(error);
      message.error(error?.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="py-4 px-2 sm:px-5 md:px-10">
      <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-black block">
          Welcome{" "}
          <span className="capitalize">
            {getDisplayName(currentUser)?.toLocaleLowerCase()}
          </span>
        </h1>
        <Link to="/profile">
          <Button className="font-bold">Check Inventory</Button>
        </Link>
      </div>
      {bloodGroupsData &&
        (currentUser?.userType === "donar" ? (
          <div className="mt-6 flex">
            <div className="max-sm:w-full bg-[#2E3440]  rounded-md flex items-center justify-between gap-14 p-4">
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold">
                {currentUser.bloodGroup}
              </p>
              <div className="flex flex-col gap-2 items-center justify-center">
                <p className="font-semibold">Total Blood Donated</p>
                <p className="text-2xl font-semibold">
                  {bloodGroupsData[currentUser?.bloodGroup!].totalIn} ml
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-4 my-4">
            {bloodGroupsArray.map((bloodGroup, index) => {
              return (
                <BloodGroupCard
                  userType={currentUser?.userType!}
                  color={colorsArray[index]}
                  data={bloodGroupsData[bloodGroup]}
                  bloodGroup={bloodGroup}
                  key={index}
                />
              );
            })}
          </div>
        ))}

      <div className="flex flex-col items-center">
        <h4 className="my-6 text-black text-xl">Recent Inventories</h4>
        <InventoryTable data={inventoryData} />
      </div>
    </div>
  );
};

export default Home;
