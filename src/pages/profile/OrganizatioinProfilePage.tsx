import { useState } from "react";
import { Button, Tabs } from "antd";
import type { TabsProps } from "antd";
import InventoryForm from "../../components/InventoryForm";
import DonarTable from "../../components/DonarTable";
import HospitalTable from "../../components/HospitalTable";
import InventoryTable from "../../components/InventoryTable";

const OrganizationProfilePage = ({ data, reloadData }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Inventory`,
      children: <InventoryTable data={data} />,
    },
    {
      key: "2",
      label: `Donars`,
      children: <DonarTable />,
    },
    {
      key: "3",
      label: `Hospitals`,
      children: <HospitalTable />,
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-5">
        <Button
          size="large"
          type="primary"
          onClick={() => setIsModalOpen(true)}
        >
          Add Inventory
        </Button>
      </div>
      <Tabs defaultActiveKey="1" centered items={items} />
      <InventoryForm
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        reloadData={reloadData}
      />
    </>
  );
};

export default OrganizationProfilePage;
