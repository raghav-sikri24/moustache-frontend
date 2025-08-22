import { Flex, Input, Text } from "@chakra-ui/react";
import React, { memo } from "react";
import { InputFieldsProps } from "../utils/types";

const CustomNumberInput = ({
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
  ...props
}: InputFieldsProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueString = e.target.value;
    const numValue = valueString === "" ? "" : parseFloat(valueString);
    onInput({ value: numValue, inputKey });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "-" || e.key === "e" || e.key === "E") {
      e.preventDefault();
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const numValue = e.target.value === "" ? "" : parseFloat(e.target.value);
    if (onBlur) {
      onBlur({ value: numValue, inputKey });
    }
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
        bg={"white"}
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
          {...props}
          className="bg-white"
          type="number"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          isDisabled={disabled}
          placeholder={placeholder}
          border="none"
          w={"100%"}
          padding={0}
          fontSize="14px"
          lineHeight="22px"
          onWheel={(e) => {
            e.currentTarget.blur();
          }}
          onKeyDown={handleKeyDown}
          cursor={disabled ? "not-allowed" : "text"}
          _placeholder={{
            fontSize: "14px",
            lineHeight: "22px",
            fontWeight: 400,
            color: "grey.400",
          }}
          _focus={{
            outline: "none",
            boxShadow: "none",
          }}
        />
      </Flex>
      {errorMsg && (
        <Text fontSize="12px" color="red.700" mt={1} textAlign={"left"}>
          {errorMsg}
        </Text>
      )}
    </Flex>
  );
};

export default memo(CustomNumberInput);
