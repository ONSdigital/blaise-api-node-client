export declare type User = {
    name: string;
    role: string;
    serverParks: string[];
    defaultServerPark: string;
};
export declare type PasswordRequest = {
    password: string;
};
export declare type UserRole = {
    name: string;
    description: string;
    permissions: string[];
};
export interface NewUser extends User {
    password: string;
}
