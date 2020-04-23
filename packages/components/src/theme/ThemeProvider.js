import { ThemeProvider as StyledThemeProvider } from 'styled-jsx-with-system';

import { theming as defaultTheme } from './theming';

export const ThemeProvider = ({ children, theme = defaultTheme }) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);
