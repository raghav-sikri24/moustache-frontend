import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

const MotionFlex = motion(Flex);

export default function PublicLayout() {
  return (
    <MotionFlex
      width={"100dvw"}
      height={"100dvh"}
      className="overflow-y-auto flex flex-col py-0 my-0"
    >
      <Outlet />
    </MotionFlex>
  );
}
