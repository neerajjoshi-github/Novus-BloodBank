import { Modal, Select, message } from "antd";
import { Form, Input, Radio, RadioChangeEvent } from "antd";
import { useState } from "react";
import { addToInventoray } from "../api/inventoryApi";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../store/store";

interface InventoryFormProps {
  isModalOpen: boolean;
  closeModal: () => void;
  reloadData: () => void;
}
const formTypes = [
  { value: "in", label: "In" },
  { value: "out", label: "Out" },
];

const bloodGroups = [
  { label: "A+", value: "A+" },
  { label: "A-", value: "A-" },
  { label: "B+", value: "B+" },
  { label: "B-", value: "B-" },
  { label: "AB+", value: "AB+" },
  { label: "AB-", value: "AB-" },
  { label: "O+", value: "O+" },
  { label: "O-", value: "O-" },
];

const InventoryForm = ({
  isModalOpen,
  closeModal,
  reloadData,
}: InventoryFormProps) => {
  const { currentUser } = useSelector((state: RootState) => state.currentUser);
  const [form] = Form.useForm();
  const [formType, setFromType] = useState<"in" | "out">("in");
  const onRadioChange = (e: RadioChangeEvent) => {
    setFromType(e.target.value);
  };
  const onOkay = () => {
    form.submit();
  };
  const onFormSubmit = async (e: any) => {
    console.log(e);
    try {
      // I don't know why but bloodGroup sometimes gives object and sometimes value
      const response = await addToInventoray({
        inventoryType: formType,
        email: e.email,
        quantity: e.quantity,
        bloodGroup: e.bloodGroup.value || e.bloodGroup,
        organization: currentUser?._id,
      });
      if (response.status === "ok") {
        message.success(response.message);
        closeModal();
        form.resetFields();
        reloadData();
      } else {
        message.error(response.message);
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };
  return (
    <Modal
      title="Inventory Form"
      open={isModalOpen}
      onCancel={closeModal}
      onOk={onOkay}
      className=""
    >
      <Form
        onFinish={onFormSubmit}
        form={form}
        layout="vertical"
        className="bg-secondaryBg p-4 rounded-md"
        requiredMark={false}
        initialValues={{
          bloodGroup: bloodGroups[0],
        }}
      >
        <Radio.Group
          onChange={onRadioChange}
          value={formType}
          buttonStyle="solid"
          optionType="button"
          options={formTypes}
          className="mb-3"
        />

        <Form.Item
          label={formType === "in" ? "Donar Email" : "Hospital Email"}
          name="email"
          rules={[{ required: true }, { type: "email" }]}
        >
          <Input type="email" />
        </Form.Item>
        <Form.Item label="Blood Group" name="bloodGroup">
          <Select options={bloodGroups} />
        </Form.Item>
        <Form.Item
          label="Quantity"
          name="quantity"
          rules={[{ required: true }]}
        >
          <Input addonAfter="ml" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default InventoryForm;
