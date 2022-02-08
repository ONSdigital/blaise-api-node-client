export type User = {
  name: string,
  role: string,
  serverParks: string[],
  defaultServerPark: string
}

export type PasswordRequest = {
  password: string
}

export type UserRole = {
  name: string,
  description: string,
  permissions: string[]
}

export interface NewUser extends User {
  password: string
}
