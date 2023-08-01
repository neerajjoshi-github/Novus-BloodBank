import { ColumnsType } from "antd/es/table";
import { Table } from "antd";
import { formatDate } from "../lib/formatDate";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const InventoryTable = ({ data }: any) => {
  const currentUser = useSelector(
    (state: RootState) => state.currentUser.currentUser
  );

  const columns: ColumnsType<any> = [
    {
      key: 1,
      title: "Inventory Type",
      align: "center",
      dataIndex: "inventoryType",
      render: (text) => text.toUpperCase(),
    },
    {
      key: 2,
      title: "Blood Group",
      dataIndex: "bloodGroup",
    },
    {
      key: 3,
      title: "Quantity",
      dataIndex: "quantity",
      render: (text) => text + " ml",
    },
    {
      key: 4,
      title:
        currentUser?.userType === "organization"
          ? "Reference"
          : "Organization Name",
      dataIndex:
        currentUser?.userType === "organization"
          ? "Reference"
          : "organizationName",
      render: (text, record) =>
        currentUser?.userType === "organization"
          ? record.inventoryType === "in"
            ? record.donar.name
            : record.hospital.hospitalName
          : record.organization.organizationName,
    },
    {
      key: 5,
      title: "Date",
      dataIndex: "date",
      render: (text, record) => formatDate(record.createdAt),
    },
  ];

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

export default InventoryTable;
