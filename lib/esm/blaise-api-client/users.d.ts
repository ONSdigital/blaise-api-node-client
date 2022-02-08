import BlaiseApiClient from "../blaise-api-client";
import { User } from "../interfaces/users";
export declare function getUser(this: BlaiseApiClient, username: string): Promise<User>;
export declare function validatePassword(this: BlaiseApiClient, username: string, password: string): Promise<boolean>;
