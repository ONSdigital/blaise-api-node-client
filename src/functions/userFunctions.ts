import BlaiseApiClient from '../blaiseApiClient';
import {
  NewUser, User, UserRole, PasswordRequest,
  RoleRequest,
} from '../interfaces/user';

export async function getUser(this: BlaiseApiClient, username: string): Promise<User> {
  return this.get<User>(`api/v2/users/${username}`);
}

export async function getUsers(this: BlaiseApiClient): Promise<User[]> {
  return this.get<User[]>('api/v2/users');
}

export async function validatePassword(this: BlaiseApiClient, username: string, password: string): Promise<boolean> {
  const validationRequest: PasswordRequest = { password };
  return this.post<boolean>(`api/v2/users/${username}/validate`, validationRequest);
}

export async function createUser(this: BlaiseApiClient, user: NewUser): Promise<NewUser> {
  return this.post('/api/v2/users', user);
}

export async function deleteUser(this: BlaiseApiClient, username: string): Promise<null> {
  return this.delete<null>(`/api/v2/users/${username}`);
}

export async function getUserRoles(this: BlaiseApiClient): Promise<UserRole[]> {
  return this.get<UserRole[]>('/api/v2/userroles');
}

export async function changeUserRole(this: BlaiseApiClient, username: string, role: string): Promise<null> {
  const roleRequest: RoleRequest = { role };
  return this.patch<null>(`/api/v2/users/${username}/role`, roleRequest);
}

export async function changePassword(this: BlaiseApiClient, username: string, password: string): Promise<null> {
  const passwordRequest: PasswordRequest = { password };
  return this.patch<null>(`/api/v2/users/${username}/password`, passwordRequest);
}
