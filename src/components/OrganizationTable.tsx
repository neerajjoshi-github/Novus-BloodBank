import { Modal, Table, message } from "antd";
import { ColumnsType } from "antd/es/table";
import { formatDate } from "../lib/formatDate";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import InventoryTable from "./InventoryTable";
import {
  getAllOrganizationsOfHospitalOrDonar,
  getInventoryWithFilters,
} from "../api/inventoryApi";

const OrganizationTable = ({ data }: any) => {
  const currentUser = useSelector(
    (state: RootState) => state.currentUser.currentUser
  );
  const [inventoryData, setInventoryData] = useState<any>([]);
  const [orgTableData, setOrgTableData] = useState<any>([]);
  const [selectedOrganization, setSelectedOrganization] = useState<any>(
    data[0]
  );
  const [showHistoryModal, setShowHistoryModal] = useState<boolean>(false);
  const columns: ColumnsType<any> = [
    {
      key: 1,
      title: "Organization Name",
      dataIndex: "organizationName",
      render: (text) => text.toUpperCase(),
    },

    {
      key: 2,
      title: "Email",
      dataIndex: "email",
    },
    {
      key: 3,
      title: "Phone",
      dataIndex: "phone",
    },
    {
      key: 4,
      title: "Address",
      dataIndex: "address",
    },
    {
      key: 5,
      title: "Created At",
      dataIndex: "createdAt",
      render: (text, record) => formatDate(record.createdAt),
    },
    {
      key: 6,
      title: "Action",
      dataIndex: "action",
      fixed: "right",
      render: (text, record) => (
        <span
          onClick={() => {
            setSelectedOrganization(record), setShowHistoryModal(true);
          }}
          className="text-sm underline underline-offset-2 font-semibold cursor-pointer"
        >
          History
        </span>
      ),
    },
  ];

  const getData = async () => {
    if (!selectedOrganization) return [];
    try {
      const response = await getInventoryWithFilters({
        organization: selectedOrganization._id,
        [currentUser?.userType === "hospital" ? "hospital" : "donar"]:
          currentUser?._id,
      });
      if (response?.status === "ok") {
        setInventoryData(response.data);
      } else {
        message.error(response.message);
      }
    } catch (error: any) {
      console.log("Error while fetching data in organizaion table :", error);
      message.error(error.message);
    }
  };

  const getOrgData = async () => {
    if (!selectedOrganization) return [];
    try {
      const response = await getAllOrganizationsOfHospitalOrDonar();
      if (response?.status === "ok") {
        setOrgTableData(response.data);
      } else {
        message.error(response.message);
      }
    } catch (error: any) {
      console.log(
        "Error while fetching org data in organizaion table :",
        error
      );
      message.error(error.message);
    }
  };

  useEffect(() => {
    getOrgData();
  }, []);

  useEffect(() => {
    getData();
  }, [selectedOrganization]);

  return (
    <>
      <Table
        bordered
        scroll={{ x: "auto" }}
        pagination={{
          hideOnSinglePage: true,
        }}
        columns={columns}
        dataSource={orgTableData}
      />
      {selectedOrganization && (
        <Modal
          cancelButtonProps={{ className: "hidden" }}
          width={1000}
          centered
          open={showHistoryModal}
          onOk={() => setShowHistoryModal(false)}
          onCancel={() => setShowHistoryModal(false)}
          title={
            currentUser?.userType === "hospital"
              ? `Consumption history in ${selectedOrganization.organizationName}`
              : `Donation history in ${selectedOrganization.organizationName}`
          }
        >
          <InventoryTable data={inventoryData} />
        </Modal>
      )}
    </>
  );
};

export default OrganizationTable;
