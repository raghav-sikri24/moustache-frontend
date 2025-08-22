import { TriangleDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  HStack,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  StackDivider,
} from "@chakra-ui/react";
import { Logout, Notification } from "react-huge-icons/outline";
import useLogout from "../../../hooks/useLogout";
import CustomText from "../../Text/CustomText";

export default function UserBox() {
  const { mutate: logout } = useLogout();
  return (
    <HStack gap={4} divider={<StackDivider borderColor={"black.50"} />}>
      <Notification fontSize={"24px"} className="cursor-pointer" />
      <Flex className="px-2 gap-3 items-center">
        <Flex className="w-[32px] h-[32px] items-center justify-center overflow-hidden rounded-full">
          <Image src={"temp"} w={"32px"} h={"32px"} />
        </Flex>
        <Flex className="flex-col gap-[2px]">
          <CustomText className="text-black-500" stylearr={[14, 20, 500]}>
            name
          </CustomText>
          <CustomText
            className="text-grey-500 capitalize"
            stylearr={[12, 18, 500]}
          >
            role
          </CustomText>
        </Flex>
        <Menu>
          <MenuButton transition="all 0.2s ease-in-out">
            <Flex className="w-6 h-6 justify-center items-center cursor-pointer hover:brightness-[1.1] transition-all">
              <TriangleDownIcon className="text-grey-500 text-[15px]" />
            </Flex>
          </MenuButton>
          <MenuList
            minWidth="150px"
            bg="white.absolute"
            border="1px solid"
            borderColor="grey.50"
            borderRadius="12px"
            boxShadow="0 4px 12px rgba(0, 0, 0, 0.15)"
            p={8}
            zIndex={1000}
            overflow="hidden"
          >
            <MenuItem
              fontSize="12px"
              lineHeight="18px"
              fontWeight={400}
              color="black.600"
              icon={<Icon as={Logout} boxSize={16} />}
              onClick={() => {
                logout();
              }}
              padding={"8px"}
              borderRadius="8px"
              mx={1}
              my={0.5}
              transition="all 0.2s ease-in-out"
              _hover={{
                bg: "grey.50",
                color: "black.600",
                "& svg": {
                  color: "black.600",
                },
              }}
              _active={{
                bg: "grey.50",
                color: "black.600",
                "& svg": {
                  color: "black.600",
                },
              }}
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </HStack>
  );
}
