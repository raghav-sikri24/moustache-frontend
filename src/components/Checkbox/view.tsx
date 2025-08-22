import { CheckIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface CustomCheckboxProps {
  label?: string;
  isChecked: boolean;
  setIsChecked?: (isChecked: boolean) => void;
  fontSize?: string;
  fontWeight?: string;
  cursor?: string;
  color?: string;
  borderRadius?: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label = "",
  isChecked,
  setIsChecked = null,
  fontSize = "14px",
  fontWeight = "500",
  cursor = "pointer",
  color = "primary.500",
  borderRadius = "6px",
}) => {
  return (
    <Flex
      gap={"8px"}
      alignItems="center"
      cursor={"pointer"}
      onClick={() => {
        setIsChecked && setIsChecked(!isChecked);
      }}
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        w="16px"
        h="16px"
        color={"white.absolute"}
        cursor={cursor}
        bgColor={isChecked ? color : "white.absolute"}
        borderColor={"grey.300"}
        borderRadius={borderRadius}
        borderWidth={isChecked ? 0 : 1}
      >
        {isChecked && <CheckIcon fontSize="10px" />}
      </Flex>
      {label && (
        <Text fontSize={fontSize} fontWeight={fontWeight} lineHeight="160%">
          {label}
        </Text>
      )}
    </Flex>
  );
};

export default CustomCheckbox;
