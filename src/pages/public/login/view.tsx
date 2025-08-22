import { authStore } from "../../../store/authStore";

export default function Login() {
  const { setAccessToken } = authStore();
  return <button onClick={() => setAccessToken("temp")}>login</button>;
}
