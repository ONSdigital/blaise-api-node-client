import { NewUser } from "../types/user.js";
import UserRole from "../enums/userRole.js";

export const mockNewUser: NewUser = {
  password: "somethingVerySecure",
  name: "Beyonce",
  role: UserRole.DST,
  serverParks: ["gusty"],
  defaultServerPark: "gusty",
};

export const mockNewUserResponse: NewUser = {
  password: "somethingVerySecure",
  name: "Beyonce",
  role: UserRole.DST,
  serverParks: ["gusty"],
  defaultServerPark: "gusty",
};
