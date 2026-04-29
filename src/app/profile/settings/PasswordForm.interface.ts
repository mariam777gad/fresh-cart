export interface ChangePassword {
  currentPassword: string;
  password: string;
  rePassword: string;
}
/* change password */
export interface AuthResponse {
  message: string;
  user: User;
  token: string;
}
export interface User {
  name: string;
  email: string;
  role: "user" | "admin"
}

