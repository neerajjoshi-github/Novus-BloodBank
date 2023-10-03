import { useState } from "react";
import { Form, Input, Radio, RadioChangeEvent, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../api/userApi";
import { message } from "antd";

const userTypes = [
  { value: "donar", label: "Donar" },
  { value: "organization", label: "Organization" },
  { value: "hospital", label: "Hospital" },
];

const validateMessages = {
  required: "${name} is required!!",
};

type LoginFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const [userType, setUserType] = useState(userTypes[0].value);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const onRadioChange = (e: RadioChangeEvent) => {
    setUserType(e.target.value as string);
  };
  const onFormSubmit = async (formData: LoginFormData) => {
    setIsLoading(true);
    const { email, password } = formData;
    const data = {
      email,
      password,
      userType,
    };
    try {
      const response = await loginUser(data);
      if (response.status === "ok") {
        message.success(response.message);
        localStorage.setItem("token", response.data.token);
        navigate("/home");
      } else {
        message.error(response.message);
      }
      console.log("rsponse", response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex h-screen items-center justify-center relative">
      <div className="absolute top-0 left-0 p-6 ">
        <h1 className="text-primary">NOVUS</h1>
      </div>

      <Form
        onFinish={onFormSubmit}
        layout="vertical"
        requiredMark={false}
        validateMessages={validateMessages}
        className="w-full sm:m-0 sm:w-[90%] m-3 md:w-[700px] bg-secondaryBg rounded-lg flex flex-col p-5 shadow-md border border-white border-solid "
      >
        <div className="col-span-2 mb-3 flex flex-col gap-y-3 sm:flex-row items-center justify-between">
          <h1 className="text-white text-4xl">Log In</h1>
          <Radio.Group
            onChange={onRadioChange}
            value={userType}
            buttonStyle="solid"
            optionType="button"
            options={userTypes}
          />
        </div>
        <hr className="col-span-2 mb-4  border-white" />

        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true }, { type: "email" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true }]}
        >
          <Input.Password />
        </Form.Item>

        <Button
          htmlType="submit"
          className="col-span-2"
          size="large"
          type="primary"
          loading={isLoading}
        >
          Login
        </Button>
        <div className="col-span-2 text-center mt-4 text-white">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-white hover:text-white font-semibold hover:underline hover:underline-offset-2"
          >
            Register
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
