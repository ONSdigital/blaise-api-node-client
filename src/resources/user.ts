import { encodePathSegment } from "../requestPath.js";

import type { BlaiseApiClient } from "../blaiseApiClient.js";
import type { NewUser, PasswordRequest, RoleRequest, User, UserRole } from "../types/user.types.js";

const getUserPath = (username: string): string => `api/v2/users/${encodePathSegment(username)}`;

export async function getUser(this: BlaiseApiClient, username: string): Promise<User> {
  return this.get<User>(getUserPath(username));
}

export async function getUsers(this: BlaiseApiClient): Promise<readonly User[]> {
  return this.get<readonly User[]>("api/v2/users");
}

export async function validatePassword(
  this: BlaiseApiClient,
  username: string,
  password: string,
): Promise<boolean> {
  const validationRequest: PasswordRequest = { password };

  return this.post<boolean>(`${getUserPath(username)}/validate`, validationRequest);
}

export async function createUser(this: BlaiseApiClient, user: NewUser): Promise<NewUser> {
  return this.post<NewUser>("api/v2/users", user);
}

export async function deleteUser(this: BlaiseApiClient, username: string): Promise<null> {
  return this.delete<null>(getUserPath(username));
}

export async function getUserRoles(this: BlaiseApiClient): Promise<readonly UserRole[]> {
  return this.get<readonly UserRole[]>("api/v2/userroles");
}

export async function changeUserRole(
  this: BlaiseApiClient,
  username: string,
  role: string,
): Promise<null> {
  const roleRequest: RoleRequest = { role };

  return this.patch<null>(`${getUserPath(username)}/role`, roleRequest);
}

export async function changeUserServerParks(
  this: BlaiseApiClient,
  username: string,
  serverParks: ReadonlyArray<string>,
  defaultServerPark: string,
): Promise<null> {
  const serverParksRequest = { serverParks, defaultServerPark };

  return this.patch<null>(`${getUserPath(username)}/serverparks`, serverParksRequest);
}

export async function changePassword(
  this: BlaiseApiClient,
  username: string,
  password: string,
): Promise<null> {
  const passwordRequest: PasswordRequest = { password };

  return this.patch<null>(`${getUserPath(username)}/password`, passwordRequest);
}
