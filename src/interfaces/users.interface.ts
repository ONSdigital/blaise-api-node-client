export type IUser = {
  name: string,
  role: string,
  serverParks: string[],
  defaultServerPark: string
}

export type IPasswordRequest = {
  password: string
}

export type IUserRole = {
  name: string,
  description: string,
  permissions: string[]
}

export interface INewUser extends IUser {
  password: string
}
