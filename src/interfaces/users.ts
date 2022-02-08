export type User = {
  name: string,
  role: string,
  serverParks: string[],
  defaultServerPark: string
}

export type ValidatePasswordRequest = {
  password: string
}

export interface NewUser extends User {
  password: string
}
