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
      bg: "black.900",
      color: "white.absolute",
      border: "none",
      borderColor: "transparent",
    },
    disabled: {
      bg: "gray.100",
      color: "gray.400",
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
      color: "black.900",
      border: "1px solid",
      borderColor: "black.900",
    },
    disabled: {
      bg: "gray.10",
      color: "gray.400",
      borderColor: "gray.100",
      opacity: 0.6,
    },
    hover: {
      opacity: 0.8,
      borderColor: "black.900",
      transform: "translateY(-0.5px)",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    },
    active: {
      bg: "black.100",
      borderColor: "black.900",
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
      bg: "transparent",
      color: "black.900",
      border: "1px solid",
      borderColor: "black.alpha16",
    },
    disabled: {
      bg: "transparent",
      color: "gray.400",
      borderColor: "gray.100",
      opacity: 0.6,
    },
    hover: {
      opacity: 0.8,
      borderColor: "black.alpha32",
      transform: "translateY(-0.5px)",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    },
    active: {
      bg: "black.alpha4",
      borderColor: "black.alpha24",
      transform: "translateY(0)",
      boxShadow: "0 1px 4px rgba(0, 0, 0, 0.15)",
    },
    focus: {
      outline: "none",
      boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.1)",
    },
  },
};

export const BUTTON_BASE_STYLES = {
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "20px",
  borderRadius: "12px",
  padding: "12px 24px",
  transition: "all 0.2s ease-in-out",
};
