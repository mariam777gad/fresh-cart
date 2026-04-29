export interface ForgetPasswordData {
  email: string;
}

export interface VerifyResetCodeData {
  resetCode: string;
}


export interface ResetPasswordData{
    email:string,
    newPassword: string
}