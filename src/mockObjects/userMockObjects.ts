import { NewUser } from "../interfaces/user.js";
import UserRole from "../enums/userRole.js";

export const CreateUserMockObject: NewUser = {
  password: "somethingVerySecure",
  name: "Beyonce",
  role: UserRole.DST,
  serverParks: ["gusty"],
  defaultServerPark: "gusty",
};

export const CreateUserResponseMockObject: NewUser = {
  password: "somethingVerySecure",
  name: "Beyonce",
  role: UserRole.DST,
  serverParks: ["gusty"],
  defaultServerPark: "gusty",
};
