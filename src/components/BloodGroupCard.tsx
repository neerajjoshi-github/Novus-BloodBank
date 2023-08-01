import React from "react";

interface BloodGroupData {
  totalIn: string;
  totalOut: string;
  available: string;
}

interface BloodGroupCardProps {
  data: BloodGroupData;
  color: string;
  bloodGroup: string;
  userType: "admin" | "donar" | "hospital" | "organization";
}

const BloodGroupCard: React.FC<BloodGroupCardProps> = ({
  color,
  data,
  bloodGroup,
  userType,
}) => {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      key={bloodGroup}
      className={`flex text-white items-center justify-between p-4 rounded-md`}
    >
      <p className="text-3xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        {bloodGroup}
      </p>

      {userType === "organization" ? (
        <div className="flex flex-col gap-1">
          <div className="text-base xs:text-xs sm:text-base flex items-center justify-between gap-4">
            <span>Total In</span>
            <span className="font-semibold">{data.totalIn} ml</span>
          </div>
          <div className="text-base xs:text-xs sm:text-base flex items-center justify-between gap-4">
            <span>Total out</span>
            <span className="font-semibold">{data.totalOut} ml</span>
          </div>
          <div className="text-base xs:text-xs sm:text-base flex items-center justify-between gap-4 border-0 border-t border-solid border-white pt-1">
            <span>Available</span>
            <span className="font-semibold">{data.available} ml</span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2 items-center">
          <p className="font-semibold text-sm">Total Blood Received</p>
          <p className="text-2xl font-semibold">{data.totalOut} ml</p>
        </div>
      )}
    </div>
  );
};

export default BloodGroupCard;
