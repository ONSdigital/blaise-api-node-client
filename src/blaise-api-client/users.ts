import BlaiseApiClient from "../blaise-api-client";
import { NewUser, User, ValidatePasswordRequest } from "../interfaces/users";

export async function getUser(this: BlaiseApiClient, username: string): Promise<User> {
  return this.get(`api/v1/users/${username}`);
}

export async function validatePassword(this: BlaiseApiClient, username: string, password: string): Promise<boolean> {
  const validationRequest: ValidatePasswordRequest = { password: password };
  return this.post(`api/v1/users/${username}/validate`, validationRequest);
}

export async function createUser(this: BlaiseApiClient, user: NewUser): Promise<NewUser> {
  return this.post("/api/v1/users", user);
}

export async function deleteUser(this: BlaiseApiClient, userName: string): Promise<null> {
  return this.delete(`/api/v1/users/${userName}`);
}
