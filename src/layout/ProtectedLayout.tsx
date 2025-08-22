import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header/view";
import useLogout from "../hooks/useLogout";
import { HOME_ROUTE } from "../Router/Routes";
import { authStore } from "../store/authStore";
import { isPublicRoute } from "../utils/helpers";

// Motion components
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
    <Flex width={"100dvw"} height={"100dvh"} className="overflow-y-auto">
      <MotionFlex
        className="bg-secondary-100 overflow-y-auto flex-grow pt-2 flex-col"
        initial={{ opacity: 0, x: 8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.25,
          ease: [0.4, 0.0, 0.2, 1],
          delay: 0.05,
        }}
      >
        <MotionFlex
          borderTopLeftRadius={"24px"}
          className="bg-white h-full overflow-y-auto flex-shrink border-[1px] border-grey-50 flex-col"
          initial={{ opacity: 0, y: 6, scale: 0.995 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0.4, 0.0, 0.2, 1],
            delay: 0.1,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.2,
              ease: [0.4, 0.0, 0.2, 1],
              delay: 0.15,
            }}
          >
            <Header />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.25,
              ease: [0.4, 0.0, 0.2, 1],
              delay: 0.2,
            }}
            style={{ flex: 1 }}
            className="overflow-y-auto flex flex-col h-full"
          >
            <Outlet />
          </motion.div>
        </MotionFlex>
      </MotionFlex>
    </Flex>
  );
}
