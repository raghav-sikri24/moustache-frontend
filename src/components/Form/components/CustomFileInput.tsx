import { AttachmentIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { memo, useRef } from "react";
import { InputFieldsProps } from "../utils/types";

const CustomFileInput = ({
  inputKey,
  label,
  placeholder = "Choose file",
  value,
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

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      onInput({ value: selectedFile, inputKey });
    }
  };

  const handleBlur = () => {
    onBlur({ value, inputKey });
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const getDisplayText = () => {
    if (value) {
      if (value instanceof File) {
        return value.name;
      }
      if (typeof value === "string") {
        return value;
      }
    }
    return placeholder;
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
        justifyContent="space-between"
        alignItems="center"
        transition="all 0.2s ease-in-out"
        opacity={disabled ? 0.5 : 1}
        cursor={disabled ? "not-allowed" : "pointer"}
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
        onClick={handleButtonClick}
      >
        <Text
          fontSize="14px"
          lineHeight="22px"
          fontWeight={value ? 600 : 400}
          color={value ? "grey.700" : "grey.400"}
          flexGrow={1}
        >
          {getDisplayText()}
        </Text>
        <Button
          variant="ghost"
          size="sm"
          leftIcon={<AttachmentIcon />}
          disabled={disabled}
          onClick={handleButtonClick}
          color="grey.600"
          _hover={{
            color: "grey.800",
            bg: "grey.50",
          }}
          _active={{
            bg: "grey.100",
          }}
        >
          Browse
        </Button>
      </Flex>
      <Box
        as="input"
        ref={fileInputRef}
        type="file"
        onChange={handleFileSelect}
        onBlur={handleBlur}
        style={{ display: "none" }}
        disabled={disabled}
      />
      {errorMsg && (
        <Text fontSize="12px" color="red.700" mt={1}>
          {errorMsg}
        </Text>
      )}
    </Flex>
  );
};

export default memo(CustomFileInput);
