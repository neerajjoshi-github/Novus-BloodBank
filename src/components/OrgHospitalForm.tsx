import { FC } from "react";
import { Form, Input } from "antd";

type OrgHospitalFormProps = {
  userType: string;
};

const OrgHospitalForm: FC<OrgHospitalFormProps> = ({ userType }) => {
  return (
    <>
      <Form.Item
        label={userType === "hospital" ? "Hospital Name" : "Organization Name"}
        name={userType === "hospital" ? "hospitalName" : "organizationName"}
        rules={[{ required: true }, { type: "string", min: 3 }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Owner Name"
        name="ownerName"
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
      <Form.Item name="website" label="Website">
        <Input addonBefore="https://" />
      </Form.Item>
      <Form.Item
        className="col-span-2"
        name="address"
        label="Address"
        rules={[{ required: true }]}
      >
        <Input.TextArea rows={3} />
      </Form.Item>
    </>
  );
};

export default OrgHospitalForm;
