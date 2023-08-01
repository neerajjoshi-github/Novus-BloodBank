type User = {
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
};

export const getDisplayName = (user: User | null) => {
  if (user?.userType === "hospital") {
    return user?.hospitalName;
  } else if (user?.userType === "organization") {
    return user?.organizationName;
  } else {
    return user?.name;
  }
};
