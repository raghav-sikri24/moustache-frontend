import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import { HOME_ROUTE } from "../Router/Routes";
import { authStore } from "../store/authStore";
import { isPublicRoute } from "../utils/helpers";

const MotionFlex = motion(Flex);

export default function ProtectedLayout() {
  const { accessToken } = authStore();
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const { mutate: logout } = useLogout();

  useEffect(() => {
    if (!accessToken) {
      logout();
      return;
    }
    if (isPublicRoute(currentPath)) {
      navigate(`${HOME_ROUTE}`);
    }
  }, [accessToken]);

  return (
    <MotionFlex
      width={"100dvw"}
      height={"100dvh"}
      className="overflow-y-auto bg-white-absolute flex flex-col py-0 my-0"
    >
      <Outlet />
    </MotionFlex>
  );
}
