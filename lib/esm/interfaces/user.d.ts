export interface User {
    name: string;
    role: string;
    serverParks: string[];
    defaultServerPark: string;
}
export interface PasswordRequest {
    password: string;
}
export interface RoleRequest {
    role: string;
}
export interface UserRole {
    name: string;
    description: string;
    permissions: string[];
}
export interface NewUser extends User {
    password: string;
}
