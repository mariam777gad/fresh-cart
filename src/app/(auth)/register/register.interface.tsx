export interface UserDataType {
  email: string;
  name: string;
  password: string;
  phone: string;
  rePassword: string;
}
export interface RegisterResponse {
  message: string
  user: User
  token: string
}

export interface User {
  name: string
  email: string
  role: string
}