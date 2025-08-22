import { Box, Flex } from "@chakra-ui/react";
import BreadCrumbs from "../BreadCrumbs/view";
import UserBox from "./components/UserBox";

export default function Header() {
  return (
    <Box
      className="w-full border-b-[1px] border-grey-50 py-4 px-[24px]"
      height={"calc(80px - 9px)"}
      minH={"calc(80px - 9px)"}
    >
      <Flex className="w-full justify-between items-center h-full">
        <BreadCrumbs data={[]} />
        <UserBox />
      </Flex>
    </Box>
  );
}
