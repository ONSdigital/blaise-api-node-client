export type User = {
  name: string,
  role: string,
  serverParks: string[],
  defaultServerPark: string
}

export type ValidatePasswordRequest = {
  password: string
}

export type CreateUser = {
  password: string,
  name: string,
  role: string,
  serverParks: string[],
  defaultServerPark: string
}

export type CreateUserResponse = {
  password: string,
  name: string,
  role: string,
  serverParks: string[],
  defaultServerPark: string
}