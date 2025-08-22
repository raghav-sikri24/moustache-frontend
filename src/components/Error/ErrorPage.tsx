import { Flex, Text } from "@chakra-ui/react";
import { SadCircle } from "react-huge-icons/outline";

export default function ErrorPage() {
  return (
    <Flex
      className="font-manrope mx-auto mt-[100px] flex-col gap-5 text-grey-500 items-center"
      alignItems="center"
      justifyContent="center"
    >
      <SadCircle fontSize={"20px"} color="grey.500" />
      <Text className="text-grey-600 text-sm" color="grey.600">
        Error! This route is not accessible!
      </Text>
    </Flex>
  );
}
