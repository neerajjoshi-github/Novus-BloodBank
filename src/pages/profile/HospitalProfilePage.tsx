import { Tabs, TabsProps, message } from "antd";
import OrganizationTable from "../../components/OrganizationTable";
import { getInventoryWithFilters } from "../../api/inventoryApi";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useEffect, useState } from "react";
import InventoryTable from "../../components/InventoryTable";

const HospitalProfilePage = ({ data }: any) => {
  const currentUser = useSelector(
    (state: RootState) => state.currentUser.currentUser
  );
  const [inventoryData, setInventoryData] = useState<any | null>(null);
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Consumption`,
      children: <InventoryTable data={inventoryData} />,
    },
    {
      key: "2",
      label: `Organizations`,
      children: <OrganizationTable data={data} />,
    },
  ];

  const getData = async () => {
    try {
      const response = await getInventoryWithFilters({
        inventoryType: "out",
        hospital: currentUser?._id,
      });

      if (response?.status === "ok") {
        message.success(response.message);
        console.log(response.data);
        setInventoryData(response.data);
        console.log(response);
      } else {
        message.error(response.message);
      }
    } catch (error: any) {
      console.log("Error while fetching data in profile page :", error);
      message.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full h-full">
      <Tabs defaultActiveKey="1" centered items={items} />;
    </div>
  );
};

export default HospitalProfilePage;
