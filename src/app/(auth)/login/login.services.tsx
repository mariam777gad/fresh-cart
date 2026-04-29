import sendUserDataLogin from "./login.action";

export default async function handelUserLogin(data) {
  const message = await sendUserDataLogin(data);
  return message;
}
