export interface LoggedUserData {
  name: string;
  email: string;
  phone: string;
}
/* update user data */
export interface NewDataResponse {
  message: string;
  user: User;
}
export interface User {
  name: string;
  email: string;
  role: string;
}

