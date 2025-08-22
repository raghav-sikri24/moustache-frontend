import { useState, useRef, useEffect } from "react";
import { Box, VStack, Flex, Text, Portal } from "@chakra-ui/react";

export interface ActionMenuOption {
  key: string;
  label: string;
  onClick: () => void;
  disabled?: boolean;
  color?: string;
  icon?: React.ReactNode;
}

interface ActionMenuProps {
  options: ActionMenuOption[];
  trigger: React.ReactNode;
}

const ActionMenu = ({ options, trigger }: ActionMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const menuWidth = 200; // minW from menu
      const menuHeight = options.length * 48; // approximate height per option

      let top = triggerRect.bottom + 4; // 4px gap
      let left = triggerRect.right - menuWidth;

      // Adjust position based on viewport
      if (left < 0) {
        left = triggerRect.left;
      }

      if (top + menuHeight > window.innerHeight) {
        top = triggerRect.top - menuHeight - 4;
      }

      setMenuPosition({ top, left });
    }
  }, [isOpen, options.length]);

  const handleOptionClick = (option: ActionMenuOption) => {
    if (!option.disabled) {
      option.onClick();
      setIsOpen(false);
    }
  };

  return (
    <>
      <Box
        ref={triggerRef}
        position="relative"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        cursor="pointer"
      >
        {trigger}
      </Box>

      {isOpen && (
        <Portal>
          <Box
            ref={menuRef}
            position="fixed"
            top={`${menuPosition.top}px`}
            left={`${menuPosition.left}px`}
            zIndex={9999}
            bg="white.absolute"
            border="1px solid"
            borderColor="grey.50"
            borderRadius="8px"
            boxShadow="0 4px 12px rgba(0, 0, 0, 0.15)"
            minW={"200px"}
            py={1}
          >
            <VStack spacing={0} align="stretch">
              {options.map((option) => (
                <Flex
                  key={option.key}
                  padding="12px 16px"
                  cursor={option.disabled ? "not-allowed" : "pointer"}
                  opacity={option.disabled ? 0.5 : 1}
                  alignItems="center"
                  gap="12px"
                  transition="all 0.2s ease-in-out"
                  _hover={
                    !option.disabled
                      ? {
                          bg: "primary.50",
                          "& .menu-text": {
                            color: "primary.500",
                          },
                          "& .menu-icon": {
                            color: "primary.500",
                            "& svg": {
                              color: "primary.500",
                            },
                          },
                        }
                      : {}
                  }
                  color={option.color || "black.300"}
                  onClick={() => handleOptionClick(option)}
                  borderRadius="8px"
                  mx={1}
                  my={0.5}
                >
                  {option.icon && (
                    <Box
                      className="menu-icon"
                      fontSize="16px"
                      lineHeight="1"
                      transition="all 0.2s ease-in-out"
                      sx={{
                        "& svg": {
                          width: "16px",
                          height: "16px",
                          transition: "all 0.2s ease-in-out",
                        },
                      }}
                    >
                      {option.icon}
                    </Box>
                  )}
                  <Text
                    className="menu-text"
                    fontSize="12px"
                    lineHeight="18px"
                    fontWeight={400}
                    transition="all 0.2s ease-in-out"
                  >
                    {option.label}
                  </Text>
                </Flex>
              ))}
            </VStack>
          </Box>
        </Portal>
      )}
    </>
  );
};

export default ActionMenu;
