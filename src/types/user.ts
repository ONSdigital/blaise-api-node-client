import type { UserRole as UserRoleUnion } from "../enums/userRole.js";

export interface UserRole {
  readonly name: string;
  readonly description: string;
  readonly permissions: readonly string[];
}

export interface User {
  readonly name: string;
  readonly role: UserRoleUnion | string;
  readonly serverParks: readonly string[];
  readonly defaultServerPark: string;
}

export interface PasswordRequest {
  readonly password: string;
}

export interface RoleRequest {
  readonly role: string;
}

export interface NewUser extends User {
  readonly password: string;
}
