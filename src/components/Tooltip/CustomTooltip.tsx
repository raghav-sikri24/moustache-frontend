import { Tooltip, TooltipProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CustomTooltipProps extends Omit<TooltipProps, "children"> {
  children: ReactNode;
  label: React.ReactNode;
}

export default function CustomTooltip({
  children,
  label,
  placement = "top",
  hasArrow = true,
  bg = "#FFF",
  color = "black.300",
  ...props
}: CustomTooltipProps) {
  return (
    <Tooltip
      label={label}
      placement={placement}
      hasArrow={hasArrow}
      bg={bg}
      color={color}
      borderRadius="md"
      px={3}
      py={2}
      {...props}
    >
      {children}
    </Tooltip>
  );
}
