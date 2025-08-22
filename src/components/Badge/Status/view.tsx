import { Flex, FlexProps } from "@chakra-ui/react";
import { StatusColorMapper } from "./utils/config";
import { StatusTypes } from "./utils/types";

interface IProps extends FlexProps {
  status: StatusTypes;
}

export default function StatusBadge({ status, ...props }: IProps) {
  const { bgColor, color } = StatusColorMapper(status);
  return (
    <Flex
      p={"6px 8px"}
      color={color}
      bgColor={bgColor}
      w={"fit-content"}
      fontSize={"12px"}
      lineHeight={"20px"}
      fontWeight={500}
      alignItems={"center"}
      justifyContent={"center"}
      borderRadius={"12px"}
      {...props}
    >
      {status}
    </Flex>
  );
}
