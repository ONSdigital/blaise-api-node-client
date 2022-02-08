import BlaiseApiClient from "../blaise-api-client";
import { NewUser, User } from "../interfaces/users";
export declare function getUser(this: BlaiseApiClient, username: string): Promise<User>;
export declare function validatePassword(this: BlaiseApiClient, username: string, password: string): Promise<boolean>;
export declare function createUser(this: BlaiseApiClient, user: NewUser): Promise<NewUser>;
export declare function deleteUser(this: BlaiseApiClient, userName: string): Promise<null>;
