import React, { FC, useEffect } from "react";
import { getUser } from "../api/userApi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../store/features/userSlice";
import type { RootState } from "../store/store";
import { getDisplayName } from "../lib/userHepler";
import { Link } from "react-router-dom";

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
      } else {
        navigate("/login");
      }
    } catch (error: any) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getCurrentUser();
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <>
      {/* Main Header */}
      <div className="border-0 border-b-2 border-white border-solid  flex items-center justify-between px-5 py-2">
        <Link to="/" className="flex items-center gap-2  no-underline">
          <img
            src="/images/novus-logo-1.png"
            alt="Logo Image"
            className="h-10 sm:h-12 md:h-14"
          />
          <h1 className="text-primary text-lg sm:text-2xl md:text-3xl">
            Novus
          </h1>
        </Link>
        <div className="flex flex-col justify-center text-black">
          <div className="flex items-center gap-2 justify-between">
            <h2 className="text-sm font-semibold capitalize">
              {getDisplayName(currentUser)?.toLocaleLowerCase()}
            </h2>

            {currentUser?.userType === "donar" ||
            currentUser?.userType === "admin" ? (
              <span className="text-xs font-semibold capitalize">
                - {currentUser?.userType}
              </span>
            ) : (
              ""
            )}
            <i
              className="ri-logout-box-r-line text-xl cursor-pointer ml-2"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            ></i>
          </div>
          <p className="font-medium text-xs">{currentUser?.email}</p>
        </div>
      </div>
      {currentUser && children}
    </>
  );
};

export default AuthorizationWrapper;
