export interface ButtonVariantConfig {
  normal: {
    bg: string;
    color: string;
    border: string;
    borderColor: string;
  };
  disabled: {
    bg: string;
    color: string;
    borderColor: string;
    opacity: number;
  };
  hover: {
    opacity?: number;
    borderColor: string;
    transform: string;
    boxShadow: string;
  };
  active: {
    bg: string;
    borderColor: string;
    transform: string;
    boxShadow: string;
  };
  focus: {
    outline: string;
    boxShadow: string;
  };
}

export const BUTTON_VARIANTS: Record<
  "primary" | "secondary" | "tertiary",
  ButtonVariantConfig
> = {
  primary: {
    normal: {
      bg: "primary.500",
      color: "white.absolute",
      border: "none",
      borderColor: "transparent",
    },
    disabled: {
      bg: "grey.100",
      color: "grey.400",
      borderColor: "transparent",
      opacity: 0.6,
    },
    hover: {
      opacity: 0.8,
      borderColor: "transparent",
      transform: "translateY(-0.5px)",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    },
    active: {
      bg: "primary.600",
      borderColor: "transparent",
      transform: "translateY(0)",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
    },
    focus: {
      outline: "none",
      boxShadow: "0 0 0 3px rgba(23, 111, 193, 0.2)",
    },
  },
  secondary: {
    normal: {
      bg: "white.absolute",
      color: "primary.500",
      border: "1px solid",
      borderColor: "primary.500",
    },
    disabled: {
      bg: "grey.10",
      color: "grey.400",
      borderColor: "grey.100",
      opacity: 0.6,
    },
    hover: {
      opacity: 0.8,
      borderColor: "primary.400",
      transform: "translateY(-0.5px)",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    },
    active: {
      bg: "primary.100",
      borderColor: "primary.600",
      transform: "translateY(0)",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
    },
    focus: {
      outline: "none",
      boxShadow: "0 0 0 3px rgba(23, 111, 193, 0.2)",
    },
  },
  tertiary: {
    normal: {
      bg: "white.absolute",
      color: "black.600",
      border: "1px solid",
      borderColor: "black.50",
    },
    disabled: {
      bg: "grey.10",
      color: "grey.400",
      borderColor: "grey.100",
      opacity: 0.6,
    },
    hover: {
      opacity: 0.8,
      borderColor: "black.100",
      transform: "translateY(-0.5px)",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    },
    active: {
      bg: "black.10",
      borderColor: "black.200",
      transform: "translateY(0)",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
    },
    focus: {
      outline: "none",
      boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.1)",
    },
  },
};

export const BUTTON_BASE_STYLES = {
  fontWeight: "600",
  fontSize: "14px",
  lineHeight: "20px",
  borderRadius: "12px",
  padding: "12px 16px",
  minHeight: "44px",
  transition: "all 0.2s ease-in-out",
};
