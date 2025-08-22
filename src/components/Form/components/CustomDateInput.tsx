import { Flex, Input, Text } from "@chakra-ui/react";
import React, { memo } from "react";
import { InputFieldsProps } from "../utils/types";

const CustomDateInput = ({
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
  type,
  ...props
}: InputFieldsProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInput({ value: e.target.value, inputKey });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    onBlur({ value: e.target.value, inputKey });
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
          type="date"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          w={"100%"}
          cursor={disabled ? "not-allowed" : "text"}
          _placeholder={{
            fontSize: "14px",
            lineHeight: "22px",
            fontWeight: 400,
            color: "grey.400",
          }}
          _focus={{
            outline: "none",
          }}
          {...props}
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

export default memo(CustomDateInput);
