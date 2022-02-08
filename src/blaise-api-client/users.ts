import BlaiseApiClient from "../blaise-api-client";
import { NewUser, User, UserRole, PasswordRequest } from "../interfaces/users";

export async function getUser(this: BlaiseApiClient, username: string): Promise<User> {
  return this.get(`api/v1/users/${username}`);
}

export async function validatePassword(this: BlaiseApiClient, username: string, password: string): Promise<boolean> {
  const validationRequest: PasswordRequest = { password: password };
  return this.post(`api/v1/users/${username}/validate`, validationRequest);
}

export async function createUser(this: BlaiseApiClient, user: NewUser): Promise<NewUser> {
  return this.post("/api/v1/users", user);
}

export async function deleteUser(this: BlaiseApiClient, username: string): Promise<null> {
  return this.delete(`/api/v1/users/${username}`);
}

export async function getUserRoles(this: BlaiseApiClient): Promise<UserRole[]> {
  return this.get(`/api/v1/userroles`)
}

export async function changePassword(this: BlaiseApiClient, username: string, password: string): Promise<null> {
  const passwordRequest: PasswordRequest = { password: password }
  return this.patch(`/api/v1/users/${username}/password`, passwordRequest)
}
