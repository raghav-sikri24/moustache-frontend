import { useState, useEffect, memo } from "react";
import { ChakraProps, Flex, Input } from "@chakra-ui/react";
import { Search } from "react-huge-icons/outline";

interface CommonSearchBarProps extends ChakraProps {
  handleChange: (value: string) => void;
  placeholder: string;
  searchText?: string;
  className?: string;
}

const SearchBar = ({
  handleChange,
  placeholder,
  searchText = "",
  className = "",
  ...props
}: CommonSearchBarProps) => {
  const [inputValue, setInputValue] = useState<string>(searchText);

  useEffect(() => {
    const handler = setTimeout(() => {
      handleChange(inputValue);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, handleChange]);

  return (
    <Flex
      padding="8px 12px"
      border="1px solid"
      borderColor="grey.50"
      borderRadius={"12px"}
      justifyContent={"center"}
      alignItems={"center"}
      className={className}
      transition="all 0.2s ease-in-out"
      _hover={{
        borderColor: "grey.100",
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.05)",
        transform: "translateY(-0.5px)",
      }}
      _focusWithin={{
        borderColor: "grey.300",
        boxShadow: "0 0 0 3px rgba(208, 213, 221, 0.1)",
      }}
      _active={{
        borderColor: "grey.200",
        transform: "translateY(0)",
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.15)",
      }}
      {...props}
    >
      <Search color="grey.800" fontSize={"16px"} className="mr-2" />
      <Input
        variant={"unstyled"}
        fontSize={"14px"}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        flexGrow={1}
        placeholder={placeholder}
        _placeholder={{ fontSize: "14px", lineHeight: "22px", fontWeight: 400 }}
        _focus={{
          outline: "none",
        }}
      />
    </Flex>
  );
};

export default memo(SearchBar);
