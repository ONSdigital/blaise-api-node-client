import BlaiseApiClient from "../blaise-api-client";
import { NewUser, User, UserRole } from "../interfaces/users";
export declare function getUser(this: BlaiseApiClient, username: string): Promise<User>;
export declare function getUsers(this: BlaiseApiClient): Promise<User[]>;
export declare function validatePassword(this: BlaiseApiClient, username: string, password: string): Promise<boolean>;
export declare function createUser(this: BlaiseApiClient, user: NewUser): Promise<NewUser>;
export declare function deleteUser(this: BlaiseApiClient, username: string): Promise<null>;
export declare function getUserRoles(this: BlaiseApiClient): Promise<UserRole[]>;
export declare function changePassword(this: BlaiseApiClient, username: string, password: string): Promise<null>;
