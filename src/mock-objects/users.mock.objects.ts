import { INewUser } from "../interfaces/users.interface";

export const CreateUserMockObject:INewUser = {
    password: "somethingVerySecure",
    name: "Beyonce",
    role: "DST",
    serverParks: [
        "gusty"
    ],
    defaultServerPark: "gusty"
};

export const CreateUserResponseMockObject:INewUser = {
    password: "somethingVerySecure",
    name: "Beyonce",
    role: "DST",
    serverParks: [
        "gusty"
    ],
    defaultServerPark: "gusty"
};