import { authStore } from "../../../store/authStore";

export default function Login() {
  const { setAccessToken } = authStore();
  return <div className="w-full h-full bg-red-500"></div>;
  return <button onClick={() => setAccessToken("temp")}>login</button>;
}
