import { ChakraProvider } from "@chakra-ui/react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "jotai";
import useTheme from "./hooks/useTheme";
import { queryClient } from "./queryClient";

const emotionCache = createCache({
  key: "emotion-css-cache",
  prepend: true,
});

export default function CustomProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: theme } = useTheme();
  return (
    <Provider>
      <CacheProvider value={emotionCache}>
        <ChakraProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </ChakraProvider>
      </CacheProvider>
    </Provider>
  );
}
