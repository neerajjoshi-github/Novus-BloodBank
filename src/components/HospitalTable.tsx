import { useEffect, useState } from "react";
import { getAllHospitalsOfOrganization } from "../api/inventoryApi";
import { Table, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import { formatDate } from "../lib/formatDate";

const columns: ColumnsType<any> = [
  {
    key: 1,
    title: "Hospital Name",
    dataIndex: "hospitalName",
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
    render: (text) => formatDate(text),
  },
];

const HospitalTable = () => {
  const [data, setData] = useState<any>([]);
  const getData = async () => {
    try {
      const response = await getAllHospitalsOfOrganization();
      if (response.status === "ok") {
        setData(response.data);
      } else {
        message.error(response.message);
      }
    } catch (error: any) {
      console.log("Error while fetching data in hospital table :", error);
      message.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Table
      bordered
      scroll={{ x: "scroll" }}
      pagination={{
        hideOnSinglePage: true,
      }}
      columns={columns}
      dataSource={data}
    />
  );
};

export default HospitalTable;
