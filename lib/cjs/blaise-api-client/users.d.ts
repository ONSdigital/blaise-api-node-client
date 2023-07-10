import BlaiseApiClient from "../blaise-api-client";
import { INewUser, IUser, IUserRole } from "../interfaces/users.interface";
export declare function getUser(this: BlaiseApiClient, username: string): Promise<IUser>;
export declare function getUsers(this: BlaiseApiClient): Promise<IUser[]>;
export declare function validatePassword(this: BlaiseApiClient, username: string, password: string): Promise<boolean>;
export declare function createUser(this: BlaiseApiClient, user: INewUser): Promise<INewUser>;
export declare function deleteUser(this: BlaiseApiClient, username: string): Promise<null>;
export declare function getUserRoles(this: BlaiseApiClient): Promise<IUserRole[]>;
export declare function changePassword(this: BlaiseApiClient, username: string, password: string): Promise<null>;
