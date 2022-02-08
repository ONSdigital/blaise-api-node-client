import BlaiseApiClient from "../blaise-api-client";
import { User, ValidatePasswordRequest } from "../interfaces/users";

export async function getUser(this: BlaiseApiClient, username: string): Promise<User> {
  return this.get(`api/v1/users/${username}`);
}

export async function validatePassword(this: BlaiseApiClient, username: string, password: string): Promise<boolean> {
  const validationRequest: ValidatePasswordRequest = { password: password };
  return this.post(`api/v1/users/${username}/validate`, validationRequest);
}
