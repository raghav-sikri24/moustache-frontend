import { useEffect, useState } from "react";

export interface IColorTheme {
  primary: {
    500: string;
    400: string;
    200: string;
    100: string;
    50: string;
  };
  secondary: {
    500: string;
    100: string;
    50: string;
  };
  grey: {
    5: string;
    10: string;
    25: string;
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
  };
  black: {
    600: string;
    500: string;
    300: string;
    50: string;
  };
  red: {
    700: string;
    100: string;
  };
  orange: {
    50: string;
    100: string;
    500: string;
  };
  cyan: {
    50: string;
    100: string;
    400: string;
    500: string;
    600: string;
  };
  green: {
    50: string;
    100: string;
    500: string;
  };
  yellow: {
    50: string;
    500: string;
  };
  purple: {
    50: string;
    500: string;
  };
  warning: {
    100: string;
    700: string;
  };
  pink: {
    100: string;
    700: string;
  };
  blueberry: {
    100: string;
    700: string;
  };
  success: {
    100: string;
    700: string;
  };
  white: {
    absolute: string;
  };
}

type CssVariableObject = Record<string, string>;

function generateCssVariables(
  obj: Record<string, any>,
  prefix: string = ""
): CssVariableObject {
  let result: CssVariableObject = {};

  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      result = {
        ...result,
        ...generateCssVariables(obj[key], `${prefix}-${key}`),
      };
    } else {
      result[`-${prefix}-${key}`] = String(obj[key]);
    }
  }
  return result;
}

const data: { colors: IColorTheme } = {
  colors: {
    primary: {
      500: "#176FC1",
      400: "#176fc180",
      200: "#B5DBFF",
      100: "#D9EDFF",
      50: "#176FC10D",
    },
    secondary: {
      500: "#DEEDF8",
      100: "#F8F8FC",
      50: "#F1F6FB",
    },
    grey: {
      5: "#FAFAFA",
      10: "#FEFEFF",
      25: "#F2F4F7",
      50: "#F1F2F4",
      100: "#D3D6DD",
      200: "#E4E7EC",
      300: "#D0D5DD",
      400: "#98A2B3",
      500: "#727A90",
      600: "#686F83",
      700: "#344054",
      800: "#1D2939",
    },
    yellow: {
      50: "#F5FFE7",
      500: "#E7AA0B",
    },
    black: {
      600: "#21242A",
      500: "#24282E",
      300: "#6C6F73",
      50: "#E9EAEA",
    },
    red: {
      700: "#D92D20",
      100: "#FEF3F2",
    },
    orange: {
      50: "#FEEFEC",
      100: "#FACDC3",
      500: "#F05D3D",
    },
    cyan: {
      50: "#E6F5FE",
      100: "#B0E0FC",
      400: "#32A6F9",
      500: "#019BF4",
      600: "#176FC1",
    },
    green: {
      50: "#E6F4F5",
      100: "#B0DEDF",
      500: "#009499",
    },
    purple: {
      50: "#F1EBFF",
      500: "#310898",
    },
    warning: {
      100: "#FFFAEB",
      700: "#E0781D",
    },
    pink: {
      100: "#FFECF6",
      700: "#9F075A",
    },
    blueberry: {
      100: "#E4EDFF",
      700: "#173999",
    },
    success: {
      100: "#ECFDF3",
      700: "#1DA366",
    },
    white: {
      absolute: "#FFFFFF",
    },
  },
};
export default function useTheme() {
  const [theme, setTheme] = useState({});

  useEffect(() => {
    if (data) {
      const css = generateCssVariables(data);
      Object.keys(css).forEach((e) => {
        document.documentElement.style.setProperty(e, css[e] ?? "");
      });

      const theme = {
        colors: data?.colors,
        components: {
          Button: { baseStyle: { width: "fit" } },
        },
      };
      setTheme(theme);
    }
  }, [data]);

  return { data: theme };
}
