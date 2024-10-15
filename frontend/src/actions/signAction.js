import { redirect } from "react-router-dom";
import { loginUser, showError } from "./authActions";

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());

  const user = {
    email: data.username,
    password: data.password,
  };

  const loginSuccessful = await loginUser(user);

  return loginSuccessful ? redirect("/user") : showError();
}
