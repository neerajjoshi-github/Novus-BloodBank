import { Form, Input, Select } from "antd";

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

const DonarForm = () => {
  return (
    <>
      <Form.Item
        name="name"
        label="Name"
        className="text-white"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true }, { type: "email" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true }, { type: "string", min: 6 }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        rules={[{ required: true }]}
        className="col-span-2"
        label="Blood Group"
        name="bloodGroup"
      >
        <Select options={bloodGroups} />
      </Form.Item>
    </>
  );
};

export default DonarForm;
