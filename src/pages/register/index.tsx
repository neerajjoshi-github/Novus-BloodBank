// should be able to go to home page without logging in
import { Button, Form, Radio, RadioChangeEvent, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import OrgHospitalForm from "../../components/OrgHospitalForm";
import { registerUser } from "../../api/userApi";
import DonarForm from "../../components/DonarForm";

const userTypes = [
  { value: "donar", label: "Donar" },
  { value: "organization", label: "Organization" },
  { value: "hospital", label: "Hospital" },
];

const validateMessages = {
  required: "${name} is required!!",
};

type FormData = {
  name?: string;
  organizationName?: string;
  hospitalName?: string;
  email: string;
  password: string;
  ownerName?: string;
  phone: string;
  website?: string;
  address: string;
};

const Register = () => {
  const [userType, setUserType] = useState(userTypes[0].value);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const onRadioChange = (e: RadioChangeEvent) => {
    setUserType(e.target.value as string);
  };
  const onFormSubmit = async (formData: FormData) => {
    setIsLoading(true);
    const user = { ...formData, userType };
    console.log("user", user, "from data from from ", formData);
    try {
      const response = await registerUser(user);
      if (response.status === "ok") {
        message.success(response.message);
        navigate("/login");
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
    <div className="flex min-h-screen items-center justify-center">
      <Form
        onFinish={onFormSubmit}
        layout="vertical"
        requiredMark={false}
        validateMessages={validateMessages}
        className="w-full border border-solid border-white sm:m-0 sm:w-[90%] m-3 md:w-[700px] bg-secondaryBg rounded-lg flex flex-col sm:grid sm:grid-cols-2 p-2 sm:p-5 gap-x-4 shadow-lg"
      >
        <div className="col-span-2 mb-3 flex flex-col gap-y-3 sm:flex-row items-center justify-between">
          <h1 className="text-white text-4xl">Register</h1>
          <Radio.Group
            onChange={onRadioChange}
            value={userType}
            buttonStyle="solid"
            optionType="button"
            options={userTypes}
          />
        </div>
        <hr className="col-span-2 mb-4  border-white" />
        {userType === "donar" ? (
          <DonarForm />
        ) : (
          <OrgHospitalForm userType={userType} />
        )}
        <Button
          htmlType="submit"
          className="col-span-2"
          size="large"
          type="primary"
          loading={isLoading}
        >
          Register
        </Button>
        <div className="col-span-2 text-center mt-4 text-white">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-white hover:text-white font-semibold hover:underline hover:underline-offset-2"
          >
            Login
          </Link>{" "}
        </div>
      </Form>
    </div>
  );
};

export default Register;
