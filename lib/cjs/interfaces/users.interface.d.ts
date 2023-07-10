export declare type IUser = {
    name: string;
    role: string;
    serverParks: string[];
    defaultServerPark: string;
};
export declare type IPasswordRequest = {
    password: string;
};
export declare type IUserRole = {
    name: string;
    description: string;
    permissions: string[];
};
export interface INewUser extends IUser {
    password: string;
}
