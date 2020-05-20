import { theming } from '../../../theme/theming';

const fonts = {
  default: theming.colors.gray900,
  muted: theming.colors.gray800,
  primary: theming.colors.blue700
};

const useFont = color => fonts[color] || color;

export default useFont;
