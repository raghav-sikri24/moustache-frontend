import { ChevronDownIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { memo, useCallback, useState } from "react";
import CustomText from "../../Text/CustomText";
import { InputFieldsProps } from "../utils/types";

const CustomSelectInput = ({
  inputKey,
  label,
  placeholder = "Select an option",
  value = "",
  errorMsg,
  required = false,
  disabled = false,
  className = "",
  formStyle,
  options = [],
  onInput,
  onBlur,
  ..._rest
}: InputFieldsProps) => {
  void _rest;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOnChange = useCallback(
    (value: string) => {
      onInput({ value, inputKey: inputKey });
    },
    [onInput, inputKey]
  );

  const getLabel =
    options?.filter((row) => row.value === value)?.[0]?.label || "";

  return (
    <Flex
      flexDir={"column"}
      gridGap={"6px"}
      className={className}
      {...formStyle}
    >
      {label && (
        <Text
          fontSize="14px"
          lineHeight="20px"
          fontWeight={600}
          color="grey.700"
          mb={1}
        >
          {label}
          {required && <span style={{ color: "red" }}>*</span>}
        </Text>
      )}
      <Flex
        p={"8px 12px"}
        border={`1px solid `}
        borderColor={isMenuOpen ? "grey.600" : "grey.300"}
        opacity={disabled ? 0.5 : 1}
        flexDir={"row"}
        justifyContent={"space-between"}
        alignItems="center"
        borderRadius={"12px"}
        transition="all 0.2s ease-in-out"
        cursor={"pointer"}
        sx={{
          boxShadow: isMenuOpen
            ? "-2px -2px 3px 0px rgba(55, 98, 221, 0.20), 2px 2px 2px 0px rgba(55, 98, 221, 0.20)"
            : "none",
        }}
      >
        {value ? (
          <Flex
            flexDir={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexGrow={1}
            w={"full"}
          >
            <CustomText stylearr={[14, 22, 500]}>{getLabel}</CustomText>

            <CloseIcon
              fontSize={"9px"}
              cursor={disabled ? "not-allowed" : "pointer"}
              onClick={disabled ? () => {} : () => handleOnChange("")}
            />
          </Flex>
        ) : (
          <Menu
            matchWidth={true}
            onOpen={() => setIsMenuOpen(true)}
            onClose={() => setIsMenuOpen(false)}
            placement="auto"
          >
            <MenuButton
              transition="all 0.2s"
              w={"full"}
              flexGrow={1}
              disabled={disabled || false}
            >
              <Flex
                flexDir={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                w={"full"}
              >
                <CustomText
                  stylearr={[14, 22, 400]}
                  color={getLabel ? "black.600" : "grey.400"}
                >
                  {getLabel || placeholder}
                </CustomText>

                <ChevronDownIcon />
              </Flex>
            </MenuButton>
            <MenuList
              maxH={"200px"}
              overflowY={"auto"}
              bg="white"
              borderRadius="12px"
              boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
              border="1px solid"
              borderColor="grey.200"
              p={"8px"}
            >
              {options?.map((item, id) => {
                return (
                  <MenuItem
                    key={id}
                    onClick={() => {
                      handleOnChange(item.value);
                    }}
                    _active={{
                      bg: "linear-gradient(231deg, rgba(55, 98, 221, 0.00) 13.46%, rgba(55, 98, 221, 0.20) 194.11%)",
                    }}
                    _focus={{
                      bg: "linear-gradient(231deg, rgba(55, 98, 221, 0.00) 13.46%, rgba(55, 98, 221, 0.20) 194.11%)",
                      outline: "none",
                    }}
                    _hover={{
                      bg: "linear-gradient(231deg, rgba(55, 98, 221, 0.00) 13.46%, rgba(55, 98, 221, 0.20) 194.11%)",
                      outline: "none",
                    }}
                    p={"4px"}
                    borderRadius="8px"
                    my={"4px"}
                  >
                    <CustomText stylearr={[14, 18, 400]}>
                      {item.label}
                    </CustomText>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        )}
      </Flex>
    </Flex>
  );
};

export default memo(CustomSelectInput);
