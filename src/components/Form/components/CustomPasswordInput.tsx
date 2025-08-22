import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Input, Text } from "@chakra-ui/react";
import React, { memo, useState } from "react";
import { InputFieldsProps } from "../utils/types";

const CustomPasswordInput = ({
  inputKey,
  label,
  placeholder,
  value = "",
  errorMsg,
  required = false,
  disabled = false,
  className = "",
  formStyle,
  onInput,
  onBlur,
  ..._rest
}: InputFieldsProps) => {
  // Explicitly mark _rest as used to satisfy TypeScript
  void _rest;

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInput({ value: e.target.value, inputKey });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    onBlur({ value: e.target.value, inputKey });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Flex direction="column" gap={"6px"} className={className} {...formStyle}>
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
        padding="8px 12px"
        border="1px solid"
        borderColor={errorMsg ? "red.700" : "grey.300"}
        borderRadius="12px"
        justifyContent="center"
        alignItems="center"
        transition="all 0.2s ease-in-out"
        opacity={disabled ? 0.5 : 1}
        _hover={
          !disabled
            ? {
                borderColor: errorMsg ? "red.300" : "grey.600",
                boxShadow: "0 1px 4px rgba(0, 0, 0, 0.05)",
                transform: "translateY(-1px)",
              }
            : {}
        }
        _focusWithin={
          !disabled
            ? {
                borderColor: errorMsg ? "red.400" : "grey.600",
                boxShadow: errorMsg
                  ? "0 0 0 3px rgba(254, 202, 202, 0.3)"
                  : "0 0 0 3px rgba(208, 213, 221, 0.1)",
              }
            : {}
        }
        _active={
          !disabled
            ? {
                borderColor: errorMsg ? "red.300" : "grey.600",
                transform: "translateY(0)",
                boxShadow: "0 1px 4px rgba(0, 0, 0, 0.15)",
              }
            : {}
        }
      >
        <Input
          variant="unstyled"
          fontSize="14px"
          lineHeight="22px"
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          cursor={disabled ? "not-allowed" : "text"}
          flexGrow={1}
          _placeholder={{
            fontSize: "14px",
            lineHeight: "22px",
            fontWeight: 400,
            color: "grey.400",
          }}
          w={"100%"}
          _focus={{
            outline: "none",
          }}
        />
        <IconButton
          aria-label={showPassword ? "Hide password" : "Show password"}
          icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
          variant="ghost"
          size="sm"
          onClick={togglePasswordVisibility}
          disabled={disabled}
          color="grey.500"
          _hover={{
            color: "grey.700",
            bg: "transparent",
          }}
          _active={{
            bg: "transparent",
          }}
          _focus={{
            boxShadow: "none",
          }}
        />
      </Flex>
      {errorMsg && (
        <Text fontSize="12px" color="red.700" mt={1}>
          {errorMsg}
        </Text>
      )}
    </Flex>
  );
};

export default memo(CustomPasswordInput);
