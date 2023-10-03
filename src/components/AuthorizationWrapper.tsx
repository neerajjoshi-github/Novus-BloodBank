import React, { FC, useEffect } from "react";
import { getUser } from "../api/userApi";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../store/features/userSlice";
import type { RootState } from "../store/store";
import DashboardHeader from "./DashboardHeader";

type AuthorizationWrapperProps = {
  children: React.ReactNode;
};

type User = {
  _id: string;
  userType: "donar" | "organization" | "hospital" | "admin";
  name?: string;
  organizationName?: string;
  hospitalName?: string;
  email: string;
  password: string;
  ownerName?: string;
  phone: string;
  website?: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
};

type Response = {
  status: string;
  message: string;
  data: User;
};

const AuthorizationWrapper: FC<AuthorizationWrapperProps> = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(
    (state: RootState) => state.currentUser.currentUser
  );

  const getCurrentUser = async () => {
    try {
      const response: Response = await getUser();
      if (response.status === "ok") {
        dispatch(setCurrentUser(response.data));
        navigate("/home", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    } catch (error: any) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getCurrentUser();
    } else {
      navigate("/", { replace: true });
    }
  }, []);
  return (
    <>
      {currentUser && (
        <>
          <DashboardHeader />
          {children}
        </>
      )}
    </>
  );
};

export default AuthorizationWrapper;
