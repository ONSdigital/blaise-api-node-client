export declare type User = {
    name: string;
    role: string;
    serverParks: string[];
    defaultServerPark: string;
};
export declare type ValidatePasswordRequest = {
    password: string;
};
export declare type CreateUser = {
    password: string;
    name: string;
    role: string;
    serverParks: string[];
    defaultServerPark: string;
};
export declare type CreateUserResponse = {
    password: string;
    name: string;
    role: string;
    serverParks: string[];
    defaultServerPark: string;
};
