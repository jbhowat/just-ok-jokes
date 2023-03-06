import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import React from "react";

export const theme: MantineThemeOverride = {
  colorScheme: "dark",
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
			<MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
				{children}
			</MantineProvider>
  );
}
