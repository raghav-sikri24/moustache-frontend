import { useNavigate } from "react-router-dom";
import { queryClient } from "../queryClient";
import useResetAuthStore from "./useResetAuthStore";

export interface ILogout {
  refresh_token: string;
}

export default function useLogout() {
  const navigate = useNavigate();
  const resetAuthStore = useResetAuthStore();
  const logout = () => {
    resetAuthStore();
    navigate("/landing-page");
    queryClient.clear();
  };

  return { mutate: logout };
}
