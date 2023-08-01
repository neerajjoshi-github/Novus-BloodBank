import { Tabs, TabsProps } from "antd";
import OrganizationTable from "../../components/OrganizationTable";
import InventoryTable from "../../components/InventoryTable";

const DonarProfilePage = ({ data }: any) => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Donations`,
      children: <InventoryTable data={data} />,
    },
    {
      key: "2",
      label: `Organizations`,
      children: <OrganizationTable data={data} />,
    },
  ];

  return (
    <div className="w-full h-full">
      <Tabs
        size="middle"
        tabBarStyle={{
          fontWeight: 700,
        }}
        defaultActiveKey="1"
        centered
        items={items}
      />
    </div>
  );
};

export default DonarProfilePage;
