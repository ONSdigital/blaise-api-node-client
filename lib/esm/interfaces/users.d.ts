export declare type User = {
    name: string;
    role: string;
    serverParks: string[];
    defaultServerPark: string;
};
export declare type ValidatePasswordRequest = {
    password: string;
};
export interface NewUser extends User {
    password: string;
}
