import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { theming as defaultTheme } from './theming';

export const ThemeProvider = ({ children, theme = defaultTheme }) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);
