import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

const MotionFlex = motion(Flex);

export default function PublicLayout() {
  return (
    <MotionFlex
      width={"100dvw"}
      height={"100dvh"}
      className="overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.2,
        ease: [0.4, 0.0, 0.2, 1],
      }}
    >
      <Outlet />
    </MotionFlex>
  );
}
