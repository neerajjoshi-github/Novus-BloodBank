import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../store/store";
import { getDisplayName } from "../lib/userHepler";

const DashboardHeader = () => {
  const currentUser = useSelector(
    (state: RootState) => state.currentUser.currentUser
  );
  const navigate = useNavigate();
  return (
    <div className="border-0 border-b-2 border-white border-solid  flex items-center justify-between p-5">
      <Link to="/home" className="flex items-center gap-2  no-underline">
        <h1 className="text-primary text-lg sm:text-2xl md:text-3xl">Novus</h1>
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
              navigate("/login", { replace: true });
            }}
          ></i>
        </div>
        <p className="font-medium text-xs">{currentUser?.email}</p>
      </div>
    </div>
  );
};

export default DashboardHeader;
