const UserRole = {
  DST: "DST",
  BDSS: "BDSS",
} as const;

export type UserRole = (typeof UserRole)[keyof typeof UserRole];

export { UserRole };

export default UserRole;
