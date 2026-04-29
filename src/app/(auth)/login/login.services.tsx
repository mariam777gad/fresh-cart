import sendUserDataLogin from "./login.action";
import { LoginDataType } from "./login.interface";

export default async function handelUserLogin(data:LoginDataType) {
  const message = await sendUserDataLogin(data);
  return message;
}
