import { Box, Button, ButtonProps, HStack, Spinner } from "@chakra-ui/react";
import React from "react";
import { BUTTON_VARIANTS, BUTTON_BASE_STYLES } from "./config";

export interface CustomButtonProps
  extends Omit<ButtonProps, "variant" | "leftIcon" | "rightIcon"> {
  variant?: "primary" | "secondary" | "tertiary";
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function CustomButton({
  variant = "primary",
  leftIcon,
  rightIcon,
  children,
  loading = false,
  disabled = false,
  onClick,
  ...props
}: CustomButtonProps) {
  const isDisabled = disabled || loading;
  const validVariant =
    variant && BUTTON_VARIANTS[variant] ? variant : "primary";
  const variantConfig = BUTTON_VARIANTS[validVariant];

  // Get spinner colors based on variant
  const getSpinnerColor = () => {
    switch (variant) {
      case "primary":
        return "white.absolute";
      case "secondary":
        return "primary.500";
      case "tertiary":
        return "black.600";
      default:
        return "primary.500";
    }
  };

  const getSpinnerEmptyColor = () => {
    switch (variant) {
      case "primary":
        return "rgba(255, 255, 255, 0.3)";
      case "secondary":
        return "rgba(23, 111, 193, 0.2)";
      case "tertiary":
        return "rgba(0, 0, 0, 0.1)";
      default:
        return "rgba(23, 111, 193, 0.2)";
    }
  };

  return (
    <Button
      disabled={isDisabled}
      isLoading={loading}
      onClick={isDisabled || loading ? () => {} : onClick}
      cursor={isDisabled ? "not-allowed" : "pointer"}
      // Base styles
      {...BUTTON_BASE_STYLES}
      // Variant styles
      bg={isDisabled ? variantConfig.disabled.bg : variantConfig.normal.bg}
      color={
        isDisabled ? variantConfig.disabled.color : variantConfig.normal.color
      }
      border={variantConfig.normal.border}
      borderColor={
        isDisabled
          ? variantConfig.disabled.borderColor
          : variantConfig.normal.borderColor
      }
      opacity={isDisabled ? variantConfig.disabled.opacity : 1}
      // Hover states
      _hover={
        isDisabled
          ? {
              bg: variantConfig.disabled.bg,
              color: variantConfig.disabled.color,
              borderColor: variantConfig.disabled.borderColor,
              transform: "none",
              boxShadow: "none",
            }
          : {
              opacity: variantConfig.hover.opacity,
              borderColor: variantConfig.hover.borderColor,
              transform: variantConfig.hover.transform,
              boxShadow: variantConfig.hover.boxShadow,
            }
      }
      // Active states
      _active={
        isDisabled
          ? {
              bg: variantConfig.disabled.bg,
              color: variantConfig.disabled.color,
              borderColor: variantConfig.disabled.borderColor,
              transform: "none",
              boxShadow: "none",
            }
          : {
              bg: variantConfig.active.bg,
              borderColor: variantConfig.active.borderColor,
              transform: variantConfig.active.transform,
              boxShadow: variantConfig.active.boxShadow,
            }
      }
      // Focus states
      _focus={
        isDisabled
          ? {
              outline: "none",
              boxShadow: "none",
            }
          : {
              outline: variantConfig.focus.outline,
              boxShadow: variantConfig.focus.boxShadow,
            }
      }
      // User props can override any of the above
      {...props}
    >
      <Box
        position="relative"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
      >
        {/* Hidden actual content during loading to preserve width */}
        <HStack
          spacing="8px"
          align="center"
          visibility={loading ? "hidden" : "visible"}
        >
          {leftIcon && <span>{leftIcon}</span>}
          {children && <span>{children}</span>}
          {rightIcon && <span>{rightIcon}</span>}
        </HStack>

        {/* Spinner on top, centered absolutely */}
        {loading && (
          <Spinner
            position="absolute"
            size="xl"
            thickness="4px"
            color={getSpinnerColor()}
            speed="0.6s"
            emptyColor={getSpinnerEmptyColor()}
          />
        )}
      </Box>
    </Button>
  );
}
