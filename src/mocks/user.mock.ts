import type { NewUser } from "../types/user.types.js";

export const mockNewUser = {
  password: "somethingVerySecure",
  name: "Beyonce",
  role: "DST",
  serverParks: ["gusty"],
  defaultServerPark: "gusty",
} as const satisfies NewUser;
