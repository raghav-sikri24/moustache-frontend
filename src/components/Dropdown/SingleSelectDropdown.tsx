import { useState, useRef, useEffect, memo } from "react";
import { ChakraProps, Flex, Text, Box, VStack } from "@chakra-ui/react";
import { ChevronDownIcon, CloseIcon } from "@chakra-ui/icons";

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SingleSelectDropdownProps extends ChakraProps {
  options: DropdownOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

const SingleSelectDropdown = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
  disabled = false,
  ...props
}: SingleSelectDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsOpen(!isOpen);
    } else if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  const handleClearSelection = (event: React.MouseEvent) => {
    event.stopPropagation();
    onChange("");
  };

  return (
    <Box position="relative" ref={dropdownRef} className={className} {...props}>
      <Flex
        padding="8px 12px"
        border="1px solid"
        borderColor="grey.50"
        borderRadius="12px"
        justifyContent="space-between"
        alignItems="center"
        cursor={disabled ? "not-allowed" : "pointer"}
        transition="all 0.2s ease-in-out"
        opacity={disabled ? 0.5 : 1}
        bg={"white"}
        _hover={
          !disabled
            ? {
                borderColor: "grey.100",
                boxShadow: "0 1px 4px rgba(0, 0, 0, 0.05)",
                transform: "translateY(-0.5px)",
              }
            : {}
        }
        _focusWithin={
          !disabled
            ? {
                borderColor: "grey.300",
                boxShadow: "0 0 0 3px rgba(208, 213, 221, 0.1)",
              }
            : {}
        }
        _active={
          !disabled
            ? {
                borderColor: "grey.200",
                transform: "translateY(0)",
                boxShadow: "0 1px 4px rgba(0, 0, 0, 0.15)",
              }
            : {}
        }
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Text
          fontSize="14px"
          lineHeight="20px"
          fontWeight={400}
          color={selectedOption ? "black.600" : "grey.400"}
          flexGrow={1}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </Text>
        {selectedOption ? (
          <CloseIcon
            color="grey.800"
            fontSize="10px"
            cursor="pointer"
            onClick={handleClearSelection}
            transition="color 0.2s ease-in-out"
          />
        ) : (
          <ChevronDownIcon
            color="grey.800"
            fontSize="20px"
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease-in-out",
            }}
          />
        )}
      </Flex>

      {isOpen && (
        <Box
          position="absolute"
          top="100%"
          left={0}
          right={0}
          mt={1}
          zIndex={1000}
          bg="white"
          border="1px solid"
          borderColor="grey.50"
          borderRadius="12px"
          boxShadow="0 4px 12px rgba(0, 0, 0, 0.15)"
          maxHeight="200px"
          overflowY="auto"
          role="listbox"
        >
          <VStack spacing={0} align="stretch">
            {options.map((option) => (
              <Flex
                key={option.value}
                padding="8px 12px"
                cursor={option.disabled ? "not-allowed" : "pointer"}
                opacity={option.disabled ? 0.5 : 1}
                _hover={
                  !option.disabled
                    ? {
                        bg: "primary.50",
                      }
                    : {}
                }
                _active={
                  !option.disabled
                    ? {
                        bg: "primary.50",
                      }
                    : {}
                }
                onClick={() =>
                  !option.disabled && handleOptionClick(option.value)
                }
                role="option"
                aria-selected={option.value === value}
                bg={option.value === value ? "primary.50" : "transparent"}
                borderRadius="8px"
                mx={1}
                my={0.5}
              >
                <Text
                  fontSize="14px"
                  lineHeight="18px"
                  fontWeight={600}
                  color={"black.300"}
                >
                  {option.label}
                </Text>
              </Flex>
            ))}
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default memo(SingleSelectDropdown);
