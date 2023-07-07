import BlaiseApiClient from "../blaise-api-client";
import { INewUser, IUser, IUserRole, IPasswordRequest } from "../interfaces/users.interface";

export async function getUser(this: BlaiseApiClient, username: string): Promise<IUser> {
  return this.get(`api/v2/users/${username}`);
}

export async function getUsers(this: BlaiseApiClient): Promise<IUser[]> {
  return this.get("api/v2/users");
}

export async function validatePassword(this: BlaiseApiClient, username: string, password: string): Promise<boolean> {
  const validationRequest: IPasswordRequest = { password: password };
  return this.post(`api/v2/users/${username}/validate`, validationRequest);
}

export async function createUser(this: BlaiseApiClient, user: INewUser): Promise<INewUser> {
  return this.post("/api/v2/users", user);
}

export async function deleteUser(this: BlaiseApiClient, username: string): Promise<null> {
  return this.delete(`/api/v2/users/${username}`);
}

export async function getUserRoles(this: BlaiseApiClient): Promise<IUserRole[]> {
  return this.get("/api/v2/userroles");
}

export async function changePassword(this: BlaiseApiClient, username: string, password: string): Promise<null> {
  const passwordRequest: IPasswordRequest = { password: password };
  return this.patch(`/api/v2/users/${username}/password`, passwordRequest);
}
