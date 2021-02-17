import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { theming as defaultTheme } from './theming';

export const ThemeProvider = ({ children, theme = defaultTheme }) => {
  const mergeThemes = { ...defaultTheme, ...theme };

  return (
    <StyledThemeProvider theme={mergeThemes}>{children}</StyledThemeProvider>
  );
};
