import { useState, useEffect } from "react";
import { message } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { getInventory } from "../../api/inventoryApi";
import DonarProfilePage from "./DonarProfilePage";
import HospitalProfilePage from "./HospitalProfilePage";
import OrganizationProfilePage from "./OrganizatioinProfilePage";

const ProfilePage = () => {
  const currentUser = useSelector(
    (state: RootState) => state.currentUser.currentUser
  );
  const [data, setData] = useState<[any] | null>(null);
  const getData = async () => {
    try {
      const respose = await getInventory();
      if (respose.status === "ok") {
        setData(respose.data);
      } else {
        message.error(respose.message);
      }
    } catch (error: any) {
      console.log(
        "Error while fetching inventory data in profile page : ",
        error
      );
      message.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="px-2 md:px-10 py-5 ">
      {currentUser?.userType === "donar" && <DonarProfilePage data={data} />}
      {currentUser?.userType === "hospital" && (
        <HospitalProfilePage data={data} />
      )}
      {currentUser?.userType === "organization" && (
        <OrganizationProfilePage reloadData={getData} data={data} />
      )}
    </div>
  );
};

export default ProfilePage;
