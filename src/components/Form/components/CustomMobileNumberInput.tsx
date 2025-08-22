import React from "react";
import { Flex, Text, Input } from "@chakra-ui/react";

interface MobileNumberInputProps {
  inputKey: string;
  label?: string;
  placeholder?: string;
  value?: string | number;
  errorMsg?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  formStyle?: object;
  onInput: (args: { value: string; inputKey: string }) => void;
  onBlur?: (args: { value: string; inputKey: string }) => void;
}

const getPhoneMaxLength = (value: string | number) => {
  const strVal = String(value || "");
  if (strVal.startsWith("91")) return 12;
  if (strVal.startsWith("+")) return 13;
  if (strVal.startsWith("0")) return 11;
  return 10;
};

const CustomMobileNumberInput = ({
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
}: MobileNumberInputProps) => {
  const maxLength = getPhoneMaxLength(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    val = val.replace(/(?!^\+)\D/g, "");

    if (val.length > maxLength) {
      val = val.slice(0, maxLength);
    }

    onInput({ value: val, inputKey });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "-" || e.key === "e" || e.key === "E") {
      e.preventDefault();
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur({ value: e.target.value, inputKey });
    }
  };

  return (
    <Flex direction="column" gap="6px" className={className} {...formStyle}>
      {label && (
        <Text fontSize="14px" fontWeight={600} color="grey.700" mb={1}>
          {label}
          {required && <span style={{ color: "red" }}>*</span>}
        </Text>
      )}

      <Flex
        padding="8px 12px"
        border="1px solid"
        borderColor={errorMsg ? "red.700" : "grey.300"}
        borderRadius="12px"
        bg="white"
        opacity={disabled ? 0.5 : 1}
        _focusWithin={{
          borderColor: errorMsg ? "red.400" : "grey.600",
          boxShadow: errorMsg
            ? "0 0 0 3px rgba(254, 202, 202, 0.3)"
            : "0 0 0 3px rgba(208, 213, 221, 0.1)",
        }}
      >
        <Input
          type="text"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          border="none"
          w="100%"
          padding={0}
          fontSize="14px"
          onWheel={(e) => e.currentTarget.blur()}
          onKeyDown={handleKeyDown}
          _placeholder={{
            fontSize: "14px",
            color: "grey.400",
          }}
          _focus={{
            outline: "none",
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

export default CustomMobileNumberInput;
